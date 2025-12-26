namespace GriffinT.API.Entities;
public class Tenant
{
    public Guid Id { get; set;}
    public string Name { get; set;}
    public string Document { get; set;}
    public bool IsActive { get; set;} = true;
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
}