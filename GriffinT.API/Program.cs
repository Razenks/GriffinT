using GriffinT.API.Data;
using GriffinT.API.Services;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

// ==========================================
// 1. CONFIGURAÇÃO DE SERVIÇOS (DI Container)
// ==========================================

// A. Configuração do Banco de Dados (PostgreSQL)
// Ele pega a string "DefaultConnection" do seu appsettings.json
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");

builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseNpgsql(connectionString));
// B. Injeção de Dependência dos seus Serviços
// Toda vez que um Controller pedir "ProductService", o .NET entrega uma instância nova.
builder.Services.AddScoped<ProductService>();
// builder.Services.AddScoped<StockService>(); // Descomente quando criar
builder.Services.AddScoped<AuthService>();

// C. Configuração do CORS (Vital para o React funcionar)
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactApp", policy =>
    {
        policy.WithOrigins("http://localhost:5173") // Endereço do seu Front (Vite)
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

var jwtSettings = builder.Configuration.GetSection("JwtSettings");
var secretKey = jwtSettings["SecretKey"];

builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
})
.AddJwtBearer(options =>
{
    options.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuer = true,
        ValidateAudience = true,
        ValidateLifetime = true,
        ValidateIssuerSigningKey = true,

        ValidIssuer = jwtSettings["issuer"],
        ValidAudience = jwtSettings["Audience"],
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(secretKey))
    };
});

// D. Serviços Padrão da API
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(); // Documentação automática (Swagger)

// ==========================================
// 2. CONSTRUÇÃO DO APP
// ==========================================
var app = builder.Build();

// ==========================================
// 3. PIPELINE DE REQUISIÇÃO (Middleware)
// ==========================================

// Só mostra o Swagger se estiver rodando na sua máquina (Development)
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

// Aplica a política de CORS que criamos acima
app.UseCors("AllowReactApp");

app.UseAuthentication();
app.UseAuthorization();

// Mapeia os Controllers (ProductsController, etc)
app.MapControllers();

// Roda a aplicação
app.Run();