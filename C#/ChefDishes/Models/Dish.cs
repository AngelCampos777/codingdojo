#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
namespace ChefDishes.Models;

public class Dish
{
    [Key]
    public int DishId {get;set;}
    [Required]
    public string Name {get;set;}
    public int Tastiness {get;set;}
    [Required]
    [Range(0, double.MaxValue)]
    public int Calories {get;set;}
        [Required]
    [MinLength(10)]
    public string Description {get;set;}
    public DateTime CreatedAt {get;set;} = DateTime.Now;
    public DateTime UpdatedAt {get;set;} = DateTime.Now;
    public int ChefId {get;set;}
    public Chef? Chef {get;set;}
}