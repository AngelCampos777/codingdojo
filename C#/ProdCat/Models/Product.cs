#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
namespace ProdCat.Models;

public class Product
{
    [Key]
    public int ProductId {get;set;}
    [Required]
    [MinLength(2)]
    public string Name {get;set;}
    [Required]
    [MinLength(10)]
    public string Description {get;set;}
        [Required]
    [Range(0, double.MaxValue)]
    public decimal Price {get;set;}
    public DateTime CreatedAt{get;set;} = DateTime.Now;
    public DateTime UpdatedAt{get;set;} = DateTime.Now;
    public List<Association> CategoriesOfProduct {get;set;} = new List<Association>();
}