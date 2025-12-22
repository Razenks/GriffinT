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

        public int MinStock { get; set; }
        
    }
}