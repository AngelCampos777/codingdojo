#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace beltc1.Models;
public class User
{
    [Key]
    public int UserId{get;set;}
    [Required]
    [MinLength(2)]
    public string Name {get;set;}
    [EmailAddress]
    [Required]
    public string Email {get;set;}
    [Required]
    [MinLength(8)]
    [DataType(DataType.Password)]
    public string Password {get;set;}
    [NotMapped]
    [Required]
    [DataType(DataType.Password)]
    [Compare("Password")]
    public string PasswordConfirm {get;set;}
    public DateTime CreatedAt {get;set;} = DateTime.Now;
    public DateTime UpdatedAt {get;set;} = DateTime.Now;
    public List<Meetup> Planned {get;set;} = new List<Meetup>();
    public List<Participant> Attending {get;set;} = new List<Participant>();
}