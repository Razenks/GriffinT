using System.ComponentModel.DataAnnotations;

namespace GriffinT.API.DTOs.Auth;

public class RegisterRequestDto
{
    // Dados da empresa
    [Required]
    public string CompanyName { get; set; }

    [Required]
    public string Document { get; set; } // CNPJ ou CPF

    // Dados do Dono (Admin)
    [Required]
    public string AdminName { get; set;}

    [Required]
    [EmailAddress]
    public string Email { get; set; }

    [Required]
    [MinLength(6)]
    public string Password { get; set; }

}