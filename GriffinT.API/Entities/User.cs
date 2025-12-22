namespace GriffinT.API.Entities;
public class User
{
    public Guid Id {get; set;}
    //Vínculo: A qual empresa esse usuario pertence?
    public Guid TenantId {get; set;}
    public Tenant Tenant { get; set;}

    public string Name { get; set;}
    public string Email { get; set;} 
    public string PasswordHash {get; set;} // somente salvar senha hash
    public string Role { get; set; } //Admin, Vendedor
}