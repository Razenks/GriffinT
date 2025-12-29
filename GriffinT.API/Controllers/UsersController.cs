using Microsoft.EntityFrameworkCore;
using GriffinT.API.Data;
using GriffinT.API.DTOs.Auth;
using GriffinT.API.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;

public class UsersController : ControllerBase
{
    private readonly AppDbContext _context;
    private readonly AuthService _authService;

    public UsersController(AuthService authService, AppDbContext context)
    {
        _authService = authService;
        _context = context;
    }

    [HttpGet]
    [Authorize]
    public async Task<ActionResult<IEnumerable<UserResponseDto>>> GetAll()
    {
        try
        {
            // 1 Descobre quem é a empresa do usuario logado
            var tenantIdClaim = User.FindFirst("TenantId");
            if (tenantIdClaim == null ) return Unauthorized();

            var tenantId = Guid.Parse(tenantIdClaim.Value);

            // 2 Busca no banco todos os usuarios dessa empresa
            var users = await _context.Users
                .Where(u => u.TenantId == tenantId)
                .Select(u => new UserResponseDto
                {
                    Id = u.Id,
                    Name = u.Name,
                    Email = u.Email,
                    Role = u.Role   
                })
                .ToListAsync();

            return Ok(users);
        } catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }
    }
}