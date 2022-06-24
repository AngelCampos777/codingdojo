using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity;
using wedding.Models;
using Microsoft.EntityFrameworkCore;

namespace wedding.Controllers;

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
        ViewBag.AllWeddings = _context.Weddings.Include(a => a.Planner).Include(w => w.Attendees).ThenInclude(g => g.Attending).OrderBy(d => d.Date).ToList();
        return View();
    }
    public IActionResult Privacy()
    {
        return View();
    }
    [HttpGet("addWedding")]
    public IActionResult addWedding()
    {
        if(HttpContext.Session.GetInt32("UserId") == null)
        {
            return RedirectToAction("Index");
        }
        ViewBag.NotLoggedIn = false;
        return View("addWedding");
    }
    [HttpPost("wedding/add")]
    public IActionResult AddWedding(Wedding newWedding)
    {
        ViewBag.NotLoggedIn = false;
        if(ModelState.IsValid)
        {
            newWedding.UserId = (int)HttpContext.Session.GetInt32("UserId");
            _context.Add(newWedding);
            _context.SaveChanges();
            return Redirect($"/wedding/{newWedding.WeddingId}");
        } else {
            return View("addWedding");
        }
    }
    [HttpGet("/wedding/{WeddingId}")]
    public IActionResult RenderWedding(int WeddingId)
    {
        if(HttpContext.Session.GetInt32("UserId") == null)
        {
            return RedirectToAction("Index");
        }
        ViewBag.NotLoggedIn = false;
        Wedding? weddingToShow = _context.Weddings.Include(s => s.Attendees).ThenInclude(d => d.Attending).FirstOrDefault(a => a.WeddingId == WeddingId);
        if(weddingToShow == null){
            return RedirectToAction("Dashboard");
        }
        ViewBag.OneWedding = weddingToShow;
        return View("RenderWedding");
    }
    [HttpGet("/wedding/delete/{WeddingId}")]
    public IActionResult DeleteWedding(int WeddingId)
    {
        if(HttpContext.Session.GetInt32("UserId") == null)
        {
            return RedirectToAction("Index");
        }
        Wedding? weddingToDelete = _context.Weddings.SingleOrDefault(a => a.WeddingId == WeddingId);
        if(weddingToDelete == null){
            return RedirectToAction("Dashboard");
        }
        if(weddingToDelete.UserId != HttpContext.Session.GetInt32("UserId")){
            return RedirectToAction("Index");
        }
        _context.Weddings.Remove(weddingToDelete);
        _context.SaveChanges();
        return RedirectToAction("Dashboard");
    }
    [HttpGet("/wedding/Rsvp/{WeddingId}")]
    public IActionResult RsvpWedding(int WeddingId)
    {
        if(HttpContext.Session.GetInt32("UserId") == null)
        {
            return RedirectToAction("Index");
        }
        Guest newGuest = new Guest()
        {
            UserId = (int)HttpContext.Session.GetInt32("UserId"),
            WeddingId = WeddingId
        };
        _context.Add(newGuest);
        _context.SaveChanges();
            return RedirectToAction("Dashboard");
    }
    [HttpGet("/wedding/Unrsvp/{WeddingId}")]
    public IActionResult UnrsvpWedding(int WeddingId)
    {
        if(HttpContext.Session.GetInt32("UserId") == null)
        {
            return RedirectToAction("Index");
        }
        Guest? guestToDelete = _context.Guests.SingleOrDefault(a => a.WeddingId == WeddingId && a.UserId == HttpContext.Session.GetInt32("UserId"));
        if(guestToDelete == null){
            return RedirectToAction("Dashboard");
        }
        if(guestToDelete.UserId != HttpContext.Session.GetInt32("UserId")){
            return RedirectToAction("Index");
        }
        _context.Guests.Remove(guestToDelete);
        _context.SaveChanges();
            return RedirectToAction("Dashboard");
    }
    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
