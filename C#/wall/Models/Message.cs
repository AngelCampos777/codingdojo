#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;

namespace wall.Models;
public class Message
{
    [Key]
    public int MessageId{get;set;}
    [Required]
    public string messageText {get;set;}
    public DateTime CreatedAt {get;set;} = DateTime.Now;
    public DateTime UpdatedAt {get;set;} = DateTime.Now;
    public int UserId {get;set;}
    public User? Poster{get;set;}
    public List<Comment> Replies {get;set;} = new List<Comment>();
}