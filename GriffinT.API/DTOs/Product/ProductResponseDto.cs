namespace GriffinT.API.DTOs.Product
{
    public class ProductResponseDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public decimal SalePrice { get; set; }
        public int Quantity { get; set; }
        public string Status { get ; set; } // Ex: "Estoque Baixo" ou "Normal"
    }
}