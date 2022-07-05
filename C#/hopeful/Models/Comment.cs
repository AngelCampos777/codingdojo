#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace hopeful.Models;

public class Comment
{
    [Key]
    public int CommentId {get;set;}
    [Required]
    [MinLength(2)]
    public string Firstname {get;set;}
    [Required]
    [MinLength(2)]
    public string Lastname {get;set;}
    [EmailAddress]
    [Required]
    public string Email {get;set;}
    [Phone]
    public string? Phone {get;set;}
    [Required]
    [MinLength(8)]
    public string Opinion {get;set;}
    public DateTime CreatedAt {get;set;} = DateTime.Now;
    public DateTime UpdatedAt {get;set;} = DateTime.Now;
}