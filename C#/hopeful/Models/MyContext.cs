#pragma warning disable CS8618
using Microsoft.EntityFrameworkCore;
namespace hopeful.Models;
public class MyContext : DbContext
{
    public MyContext(DbContextOptions options) : base(options) { }
    public DbSet<Comment> Comments {get;set;}
}