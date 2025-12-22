using GriffinT.API.DTOs.Product;
using GriffinT.API.Services;
using Microsoft.AspNetCore.Mvc;

namespace GriffinT.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
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
            // Em produção, pegue o TenantId do Token JWT do usuário
            // var tenantId = Guid.Parse(User.FindFirst("TenantId")?.Value);
            var tenantId = Guid.Parse("SEU-GUID-AQUI");

            var result = await _service.CreateAsync(dto, tenantId);
            return CreatedAtAction(nameof(Create), new { id = result.Id}, result);
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var tenantId = Guid.Parse("SEU-GUID-AQUI");
            var result = await _service.GetAllAsync(tenantId);
            return Ok(result);
        }
    }
}