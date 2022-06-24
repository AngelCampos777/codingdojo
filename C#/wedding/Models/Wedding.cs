#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace wedding.Models;
public class Wedding
{
    [Key]
    public int WeddingId{get;set;}
    [Required]
    [MinLength(2)]
    public string WedderOne {get;set;}
    [Required]
    [MinLength(2)]
    public string WedderTwo {get;set;}
    [Required]
    [DataType(DataType.Date)]
    public DateTime Date {get;set;}
    [Required]
    public string Address {get;set;}
    public DateTime CreatedAt {get;set;} = DateTime.Now;
    public DateTime UpdatedAt {get;set;} = DateTime.Now;
    public int UserId {get;set;}
    public User? Planner{get;set;}
    public List<Guest> Attendees {get;set;} = new List<Guest>();
}