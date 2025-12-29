using GriffinT.API.Entities;
using Microsoft.EntityFrameworkCore;

namespace GriffinT.API.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        // Registre TODAS as suas Entities aqui
        public DbSet<Product> Products { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Tenant> Tenants { get; set; }
        public DbSet<StockMovement> StockMovements { get; set; }
        public DbSet<Category> Categories { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
                        
            // Exemplo: Configurar relação 1:N (Um Tenant tem muitos Produtos)
            modelBuilder.Entity<Product>()
                .HasOne<Tenant>()
                .WithMany()
                .HasForeignKey(p => p.TenantId);
                
            // Dica: Configure preços para ter 2 casas decimais sempre
            modelBuilder.Entity<Product>()
                .Property(p => p.CostPrice)
                .HasPrecision(18, 2);
        }
    }
}