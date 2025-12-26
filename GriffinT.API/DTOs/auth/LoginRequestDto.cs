using System.ComponentModel.DataAnnotations;

namespace GriffinT.API.DTOs.Auth;

public class LoginRequestDto
{
    [Required(ErrorMessage = "O e-mail é obrigatório")]
    [EmailAddress(ErrorMessage = "Formato de e-mail inválido")]
    public string Email { get; set;}

    [Required(ErrorMessage =  "A senha é obrigatória")]
    public string Password { get; set; }
}