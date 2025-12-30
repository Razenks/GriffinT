using GriffinT.API.DTOs.Auth;
using GriffinT.API.Services;
using Microsoft.AspNetCore.Mvc;

namespace GriffinT.API.Controller;

[ApiController]
[Route("api/[controller]")]
public class AuthController : ControllerBase
{
    private readonly AuthService _service;

    public AuthController(AuthService service)
    {
        _service = service;
    }

    [HttpPost("register")]
    public async Task<IActionResult> Register([FromBody] RegisterRequestDto dto)
    {
        try
        {
            var result = await _service.RegisterTenantAsync(dto);
            return Ok(new { message = result});
        }
        catch (Exception ex)
        {
            return BadRequest(new { Error = ex.Message});
        }
    } 

    [HttpPost("login")]
    public async Task<IActionResult> Login([FromBody] LoginRequestDto dto)
    {
        var token = await _service.LoginAsync(dto);

        if (token == null)
        {
            return Unauthorized(new {message = "E-mail ou senha inválidos."});
        }

        return Ok(new { token = token});
    }
}