using System.Security.Claims;
using GriffinT.API.DTOs.Product;
using GriffinT.API.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;


namespace GriffinT.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Authorize]
    public class ProductsController : ControllerBase
    {
        private readonly ProductService _service;

        public ProductsController(ProductService service)
        {
            _service = service;
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] CreateProductDto dto)
        {
            try
            {
                var tenantId = GetTenantId(); // <--- Mágica acontece aqui também
                var result = await _service.CreateAsync(dto, tenantId);

                return CreatedAtAction(nameof(GetAll), new { id = result.Id }, result);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            try
            {
                var tenantId = GetTenantId();
                var result = await _service.GetAllAsync(tenantId);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }


        }

        private Guid GetTenantId()
        {
            // procura no cracha do usuario o campo TenantId
            var claim = User.FindFirst("TenantId");

            if (claim == null)
            {
                // se nao achar, lançar o erro
                throw new UnauthorizedAccessException("Token inválido: TenantId não encontrado ");
            }

            // converte o texto do token para GUID
            return Guid.Parse(claim.Value);
        }
    }
}