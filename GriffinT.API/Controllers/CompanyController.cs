using GriffinT.API.Services;
using GriffinT.API.DTOs.Auth;
using GriffinT.API.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;

[Authorize]
[ApiController]
[Route("api/[controller]")]
public class CompanyController : ControllerBase
{
    private readonly AppDbContext _context;

    public CompanyController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet("my-company")]
    public async Task<IActionResult> GetMyCompanyData()
    {
        var tenantIdClaim = User.Claims.FirstOrDefault(c => c.Type == "TenantId");
        if (tenantIdClaim == null) return Unauthorized(new { message = "Token inválido: TenantID não encontrado! "});

        if (!Guid.TryParse(tenantIdClaim.Value, out Guid companyId))
        {
            return BadRequest(new { message = $"O ID no token não é um GUID válido."});
        }

        var company = await _context.Tenants.FindAsync(companyId);

        if (company == null) return NotFound(new { message = "Empresa não encontrada. "});

        return Ok(new
        {
            companyName = company.Name,
            cnpj = company.Document,
            isActive = company.IsActive,
        });
    }
}