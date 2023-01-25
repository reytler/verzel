using verzel.Models;
using Microsoft.EntityFrameworkCore;

public class VerzelContext : DbContext
{
    public VerzelContext(DbContextOptions<VerzelContext> options):base(options){}

    public DbSet<User> Users {get;set;} = null!;
    public DbSet<Carro> Carros {get;set;} = null!;
}