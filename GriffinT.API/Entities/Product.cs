namespace GriffinT.API.Entities;
public class Product
{
    public int Id {get; set;}
    public Guid TenantId {get; set;}

    public string Name { get; set; }
    public string? Description { get; set;}
    public string SKU {get; set;}
    public string? ImageUrl { get; set;}

    //Relacionamento
    public int CategoryId {get; set;}
    public Category Category {get; set;}

    //Valores Financeiros
    public decimal CostPrice {get; set;}
    public decimal SalePrice {get; set;}

    // Controle de Estoque
    public int Quantity { get; set; }
    public int MinStock { get; set; }

    // Controle
    public bool IsActive { get; set; } = true;
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
}