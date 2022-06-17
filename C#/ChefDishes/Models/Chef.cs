#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
namespace ChefDishes.Models;

public class Chef
{
    [Key]
    public int ChefId {get;set;}
    [Required]
    [MinLength(2)]
    public string Firstname {get;set;}
    [Required]
    [MinLength(2)]
    public string Lastname {get;set;}
    public DateOnly DateOfBirth {get;set;}
    public DateTime CreatedAt {get;set;} = DateTime.Now;
    public DateTime UpdatedAt {get;set;} = DateTime.Now;
    public List<Dish> CreatedDishes {get;set;} = new List<Dish>();
}