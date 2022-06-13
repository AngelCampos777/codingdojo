
using System.ComponentModel.DataAnnotations;
namespace Survey2.Models;
public class Survey
{
    //#pragma warning disable CS8618
    [Required(ErrorMessage = "Name is required.")]
    [MinLength(2)]
    public string Name {get;set;} = null!;


    public string Location {get;set;} = null!;
    public string Language {get;set;} = null!;
    [MinLength(20, ErrorMessage ="Minimum length of 20 characters.")]
    public string? Comments {get;set;}
}