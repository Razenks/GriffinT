using GriffinT.API.Data;
using GriffinT.API.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace GriffinT.API.Controllers;

[Authorize]
[ApiController]
[Route("api/[Controller]")]
public class StockController : ControllerBase
{
    private readonly AppDbContext _context;

    public StockController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet("summary")]
    public async Task<IActionResult> GetStockSummary()
    {
        // 1. Pega o ID da empresa do token
        if (!Guid.TryParse(User.Claims.FirstOrDefault(c => c.Type == "TenantId")?.Value, out Guid tenantId))
            return Unauthorized();

        // 2. Monta as queries (sem executar ainda)
        var productsQuery = _context.Products.Where(p => p.TenantId == tenantId && p.IsActive);
        var movementsQuery = _context.StockMovements.Where(m => m.TenantId == tenantId);

        // 3 Executa os calculos no banco de dados
        // A) Valor total em estoque (Preço * quantidade de cada item)
        var totalValue = await productsQuery.SumAsync(p => p.CurrentStock * p.SalePrice);

        // B) Quantidade de produtos cadastrados
        var totalProducts = await productsQuery.CountAsync();

        // C) Produtos com estoque baixo
        var lowStockCount = await productsQuery.CountAsync(p => p.CurrentStock < p.MinStock);

        // D) Saídas Hoje 
        var today = DateTime.UtcNow.Date;
        var outputsToday = await movementsQuery
            .Where(m => m.Type == MovementType.Output && m.Date >= today)
            .SumAsync(m => m.Quantity);

        // 4 Retorna o DTO
        return Ok(new
        {
            totalValue,
            totalProducts,
            lowStockCount,
            outputsToday
        });
    }
}