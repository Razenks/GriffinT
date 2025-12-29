using System.ComponentModel.DataAnnotations;

namespace GriffinT.API.DTOs.Product
{
    public class CreateProductDto
    {
        [Required(ErrorMessage = "O nome é obrigatório")]
        public string Name { get; set; }

        [Required]
        public string SKU { get; set; }

        [Range(0.01, double.MaxValue, ErrorMessage = "O preço deve ser maior que zero")]
        public decimal SalePrice { get; set; }

        [Range(0.01, double.MaxValue, ErrorMessage = "O preço deve ser maior que zero" )]
        public decimal CostPrice { get; set; }
        public int MinStock { get; set; }
        public int Quantity { get; set; }
        [Required]
        public int CategoryId { get; set; }
        public string? Description { get; set; }

    }
}