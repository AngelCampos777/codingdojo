#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
namespace beltc1.Models;
public class Participant
{
    [Key]
    public int ParticipantId{get;set;}
    public int UserId{get;set;}
    public User? Attending{get;set;}
    public int MeetupId{get;set;}
    public Meetup? Attendees{get;set;}
}