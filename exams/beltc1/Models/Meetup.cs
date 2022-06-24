#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
namespace beltc1.Models;
public class Meetup
{
    [Key]
    public int MeetupId{get;set;}
    [Required]
    [MinLength(2)]
    public string Name {get;set;}
    [Required]
    [DataType(DataType.DateTime)]
    public DateTime Date {get;set;}
    [Required]
    [Range(0,59)]
    public int durationVal {get;set;}
    [Required]
    public string Duration {get;set;}
    [Required]
    public string Description {get;set;}
    public DateTime CreatedAt {get;set;} = DateTime.Now;
    public DateTime UpdatedAt {get;set;} = DateTime.Now;
    public int UserId {get;set;}
    public User? Planner{get;set;}
    public List<Participant> Attendees {get;set;} = new List<Participant>();
}