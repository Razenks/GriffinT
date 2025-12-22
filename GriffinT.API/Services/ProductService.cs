using GriffinT.API.Data;
using GriffinT.API.DTOs.Product;
using GriffinT.API.Entities;
using Microsoft.EntityFrameworkCore;

namespace GriffinT.API.Services
{
    public class ProductService
    {
        private readonly AppDbContext _context;

        public ProductService(AppDbContext context)
        {
            _context = context;
        }

        public async Task<ProductResponseDto> CreateAsync(CreateProductDto dto, Guid tenantId)
        {
            // 1. Converte DTO -> Entity
            var product = new Product
            {
                Name = dto.Name,
                SKU = dto.SKU,
                SalePrice = dto.SalePrice,
                MinStock = dto.MinStock,
                TenantId = tenantId, // Garante que o produto é do cliente certo
                IsActive = true
            };

            // 2. Salva no Banco
            _context.Products.Add(product);
            await _context.SaveChangesAsync();

            // 3. Converte Entity -> DTO de Resposta
            return new ProductResponseDto
            {
                Id = product.Id,
                Name = product.Name,
                SalePrice = product.SalePrice,
                Quantity = 0, // Começa com 0 no estoque
                Status = "Novo"
            };
        }

        // Método para Listar (SaaS: Só mostra os produtos Do cliente)
        public async Task<List<ProductResponseDto>> GetAllAsync(Guid tenantId)
        {
            var products = await _context.Products
                .Where(p => p.TenantId == tenantId && p.IsActive)
                .ToListAsync();

            // Transformação Manual (ou use AutoMapper se preferir)
            return products.Select(p => new ProductResponseDto
            {
                Id = p.Id,
                Name = p.Name,
                SalePrice = p.SalePrice,
                Quantity = p.Quantity,
                Status = p.Quantity <= p.MinStock ? "Estoque Baixo" : "Normal"
            }).ToList();
        }

    }
}