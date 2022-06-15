#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
namespace Crudelicious.Models;
public class Dish
{
    [Key]
    public int DishId {get;set;}
    [Required]
    [MinLength(2)]
    public string Name {get;set;}
    [Required]
    [MinLength(2)]
    public string Chef {get;set;}
    public int Tastiness {get;set;}
    [Required]
    //greater than 0
    public int Calories {get;set;}
    [Required]
    [MinLength(10)]
    public string Description {get;set;}
    public DateTime CreatedAt {get;set;} = DateTime.Now;
    public DateTime UpdatedAt {get;set;} = DateTime.Now;

}