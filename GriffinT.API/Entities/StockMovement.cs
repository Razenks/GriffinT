namespace GriffinT.API.Entities;
public class StockMovement 
{
    public int Id { get; set;}
    public Guid TenantId { get; set;}

    // Qual produto foi movimentado?
    public int ProductId { get; set; }
    public Product Product { get; set; }

    // Quem fez? (Auditoria)
    public Guid UserId { get; set; }
    public User User { get; set; }

    public string Type { get; set; } // "IN" (Entrada) ou "OUT" (Saída)
     public int Quantity { get; set; } // Quantos itens?

    // Importante: Salvar o preço no momento da movimentação,
    // pois o preço do produto pode mudar no futuro
    public decimal UnitPriceSnapshot { get; set; }

    public string Reason { get; set; }
    public DateTime MovementDate { get; set; }
}