#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
namespace wall.Models;
public class Comment
{
    [Key]
    public int CommentId{get;set;}
    [Required]
    public string commentText {get;set;}
    public DateTime CreatedAt {get;set;} = DateTime.Now;
    public DateTime UpdatedAt {get;set;} = DateTime.Now;
    public int UserId{get;set;}
    public User? UserWhoCommented{get;set;}
    public int MessageId{get;set;}
    public Message? Replies{get;set;}

}