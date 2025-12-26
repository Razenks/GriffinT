using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using GriffinT.API.Data;
using GriffinT.API.DTOs.Auth;
using GriffinT.API.Entities;
using GriffinT.API.Utilities.Security; // onde possui o PasswordHasher
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;

namespace GriffinT.API.Services;

public class AuthService
{
    private readonly AppDbContext _context;
    private readonly IConfiguration _configuration;

    public AuthService(AppDbContext context, IConfiguration configuration)
    {
        _context = context;
        _configuration = configuration;
    }

    public async Task<string> RegisterTenantAsync(RegisterRequestDto dto)
    {
        if (await _context.Users.AnyAsync(u => u.Email == dto.Email))
            throw new Exception("Este e-mail ja está em uso.");

        using var transaction = await _context.Database.BeginTransactionAsync();

        try
        {
            // 1. Criar a Empresa (Tenant)
            var tenant = new Tenant
            {
                Name = dto.CompanyName,
                Document = dto.Document,
                IsActive = true
            };

            _context.Tenants.Add(tenant);
            await _context.SaveChangesAsync(); // Gera o ID do Tenant

            // 2. Criar o usuario Admin vinculado a empresa
            var user = new User
            {
                TenantId = tenant.Id,
                Name = dto.AdminName,
                Email = dto.Email,
                Role = "Admin",
                PasswordHash = PasswordHasher.Hash(dto.Password) // senha com hash
            };

            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            // Se tudo deu certo, confirma a transação
            await transaction.CommitAsync();

            return $"Empresa {tenant.Name} criada com sucesso! Usuário admin: {user.Email}";
        }
        catch (Exception)
        {
            // Se der erro, desfaz tudo
            await transaction.RollbackAsync();
            throw;
        }
    }

    public async Task<string?> LoginAsync(LoginRequestDto dto)
    {
        var user = await _context.Users
            .FirstOrDefaultAsync(u => u.Email == dto.Email);

        if (user == null || !PasswordHasher.Verify(dto.Password, user.PasswordHash))
        {
            return null;
        }

        var token = GenerateJwtToken(user);
        return token;
    }

    private string GenerateJwtToken(User user)
    {
        var secretKey = _configuration["JwtSettings:SecretKey"];
        var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(secretKey));
        var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

        var claims = new List<Claim>
        {
            new Claim(JwtRegisteredClaimNames.Sub, user.Id.ToString()),
            new Claim(JwtRegisteredClaimNames.Email, user.Email),
            new Claim("TenantId", user.TenantId.ToString()),
            new Claim("Role", user.Role),
        };

        var token = new JwtSecurityToken(
            issuer: _configuration["JwtSettings:Issuer"],
            audience: _configuration["jwtSettings:Audience"],
            claims: claims,
            expires: DateTime.UtcNow.AddHours(8),
            signingCredentials: creds
        );

        return new JwtSecurityTokenHandler().WriteToken(token);
    }

}