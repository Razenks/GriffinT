namespace GriffinT.API.Entities;
public class Category
{
    public int Id { get; set;}
    public Guid TenantId {get; set;}
    public string Name {get; set;}
}