#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace wedding.Models;
public class Guest
{

    public int GuestId{get;set;}
    public int UserId{get;set;}
    public User? Attending{get;set;}
    public int WeddingId{get;set;}
    public Wedding? Attendees{get;set;}
}