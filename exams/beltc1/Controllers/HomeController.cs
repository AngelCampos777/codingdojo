using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using beltc1.Models;

namespace beltc1.Controllers;

public class HomeController : Controller
{
    private MyContext _context;
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger, MyContext context)
    {
        _logger = logger;
        _context = context;
    }

    public IActionResult Index()
    {
        HttpContext.Session.Clear();
        return View();
    }

    [HttpPost("user/register")]
    public IActionResult Register(User newUser)
    {
        if(ModelState.IsValid)
        {
            if(_context.Users.Any(u => u.Email == newUser.Email))
            {
                ModelState.AddModelError("Email", "Email is already in use.");
                return View("Index");
            }
            PasswordHasher<User> Hasher = new PasswordHasher<User>();
            newUser.Password = Hasher.HashPassword(newUser, newUser.Password);
            _context.Add(newUser);
            _context.SaveChanges();
            HttpContext.Session.SetInt32("UserId", newUser.UserId);
            return RedirectToAction("Dashboard");
        } else {
            return View("Index");
        }
    }

    [HttpPost("user/login")]
    public IActionResult Login(LogUser loginUser)
    {
        if(ModelState.IsValid)
        {
            User? userInDb = _context.Users.FirstOrDefault(a => a.Email == loginUser.LogEmail);
            if(userInDb == null)
            {
                ModelState.AddModelError("LogEmail", "Invalid Login Attempt.");
                return View("Index");
            }
            PasswordHasher<LogUser> Hasher = new PasswordHasher<LogUser>();
            var result = Hasher.VerifyHashedPassword(loginUser, userInDb.Password, loginUser.LogPassword);
            if(result == 0)
            {
                ModelState.AddModelError("LogEmail", "Invalid Login Attempt.");
                return View("Index");
            } else {
                HttpContext.Session.SetInt32("UserId", userInDb.UserId);
                return RedirectToAction("Dashboard");
            }
        } else {
            return  View("Index");
        }
    }

    [HttpGet("Dashboard")]
    public IActionResult Dashboard()
    {
        if(HttpContext.Session.GetInt32("UserId") == null)
        {
            return RedirectToAction("Index");
        }
        ViewBag.NotLoggedIn = false;
        User? userInDb =  _context.Users.FirstOrDefault(a => a.UserId == HttpContext.Session.GetInt32("UserId"));
        ViewBag.LoggedIn = userInDb;
        ViewBag.AllMeetups = _context.Meetups.Include(a => a.Planner).Include(w => w.Attendees).ThenInclude(g => g.Attending).OrderBy(d => d.Date).ToList();
        return View();
    }
    public IActionResult Privacy()
    {
        return View();
    }

    [HttpGet("AddMeetup")]
    public IActionResult addMeetup()
    {
        if(HttpContext.Session.GetInt32("UserId") == null)
        {
            return RedirectToAction("Index");
        }
        ViewBag.NotLoggedIn = false;
        return View("AddMeetup");
    }

    [HttpPost("meetup/add")]
    public IActionResult AddMeetup(Meetup newMeetup)
    {
        ViewBag.NotLoggedIn = false;
        if(ModelState.IsValid)
        {
            newMeetup.UserId = (int)HttpContext.Session.GetInt32("UserId");
            _context.Add(newMeetup);
            _context.SaveChanges();
            return Redirect($"/Meetup/{newMeetup.MeetupId}");
        } else {
            return View("AddMeetup");
        }
    }

    [HttpGet("/Meetup/{MeetupId}")]
    public IActionResult RenderMeetup(int MeetupId)
    {
        if(HttpContext.Session.GetInt32("UserId") == null)
        {
            return RedirectToAction("Index");
        }
        ViewBag.NotLoggedIn = false;
        Meetup? meetupToShow = _context.Meetups.Include(a => a.Planner).Include(s => s.Attendees).ThenInclude(d => d.Attending).FirstOrDefault(a => a.MeetupId == MeetupId);
        if(meetupToShow == null){
            return RedirectToAction("Dashboard");
        }
        return View(meetupToShow);
    }

    [HttpGet("/Meetup/delete/{MeetupId}")]
    public IActionResult DeleteMeetup(int MeetupId)
    {
        if(HttpContext.Session.GetInt32("UserId") == null)
        {
            return RedirectToAction("Index");
        }
        Meetup? meetupToDelete = _context.Meetups.SingleOrDefault(a => a.MeetupId == MeetupId);
        if(meetupToDelete == null){
            return RedirectToAction("Dashboard");
        }
        if(meetupToDelete.UserId != HttpContext.Session.GetInt32("UserId")){
            return RedirectToAction("Index");
        }
        _context.Meetups.Remove(meetupToDelete);
        _context.SaveChanges();
        return RedirectToAction("Dashboard");
    }
    [HttpGet("/Meetup/Join/{MeetupId}")]
    public IActionResult JoinMeetup(int MeetupId)
    {
        if(HttpContext.Session.GetInt32("UserId") == null)
        {
            return RedirectToAction("Index");
        }
        Participant newParticipant = new Participant()
        {
            UserId = (int)HttpContext.Session.GetInt32("UserId"),
            MeetupId = MeetupId
        };
        _context.Add(newParticipant);
        _context.SaveChanges();
            return RedirectToAction("Dashboard");
    }
    [HttpGet("/Meetup/Bail/{MeetupId}")]
    public IActionResult BailMeetup(int MeetupId)
    {
        if(HttpContext.Session.GetInt32("UserId") == null)
        {
            return RedirectToAction("Index");
        }
        Participant? ParticipantToDelete = _context.Participants.SingleOrDefault(a => a.MeetupId == MeetupId && a.UserId == HttpContext.Session.GetInt32("UserId"));
        if(ParticipantToDelete == null){
            return RedirectToAction("Dashboard");
        }
        if(ParticipantToDelete.UserId != HttpContext.Session.GetInt32("UserId")){
            return RedirectToAction("Index");
        }
        _context.Participants.Remove(ParticipantToDelete);
        _context.SaveChanges();
            return RedirectToAction("Dashboard");
    }
    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
