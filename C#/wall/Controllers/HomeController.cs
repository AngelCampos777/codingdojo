using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using wall.Models;

namespace wall.Controllers;

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
        ViewBag.AllMessages = _context.Messages.Include(a => a.Poster).Include(s => s.Replies).ThenInclude(f => f.UserWhoCommented).OrderByDescending(d => d.CreatedAt).ToList();
        ViewBag.AllComments = _context.Comments.Include(a => a.Replies).OrderByDescending(d => d.CreatedAt).ToList();
        return View();
    }
    [HttpPost("message/add")]
    public IActionResult AddMessage(Message newMessage)
    {
        ViewBag.NotLoggedIn = false;
        if(ModelState.IsValid)
        {
            newMessage.UserId = (int)HttpContext.Session.GetInt32("UserId");
            _context.Add(newMessage);
            _context.SaveChanges();
            return RedirectToAction("Dashboard");
        } else {
        User? userInDb =  _context.Users.FirstOrDefault(a => a.UserId == HttpContext.Session.GetInt32("UserId"));
        ViewBag.LoggedIn = userInDb;
        ViewBag.AllMessages = _context.Messages.Include(a => a.Poster).OrderByDescending(d => d.CreatedAt).ToList();
        ViewBag.AllComments = _context.Comments.Include(a => a.Replies).OrderByDescending(d => d.CreatedAt).ToList();
            return View("Dashboard");
        }
    }
    [HttpGet("AddComment/{MessageId}")]
    public IActionResult AddComment(int MessageId)
    {
        if(HttpContext.Session.GetInt32("UserId") == null)
        {
            return RedirectToAction("Index");
        }
        ViewBag.NotLoggedIn = false;
        User? userInDb =  _context.Users.FirstOrDefault(a => a.UserId == HttpContext.Session.GetInt32("UserId"));
        ViewBag.LoggedIn = userInDb;
        ViewBag.AllMessages = _context.Messages.Include(a => a.Poster).OrderByDescending(d => d.CreatedAt).ToList();
        ViewBag.AllComments = _context.Comments.Include(a => a.Replies).OrderByDescending(d => d.CreatedAt).ToList();
        return View();
    }
    [HttpPost("comment/add")]
    public IActionResult AddComment(Comment newComment)
    {
        ViewBag.NotLoggedIn = false;
        if(ModelState.IsValid)
        {
        _context.Add(newComment);
        _context.SaveChanges();
        return RedirectToAction("Dashboard");
        } else {
        User? userInDb =  _context.Users.FirstOrDefault(a => a.UserId == HttpContext.Session.GetInt32("UserId"));
        ViewBag.LoggedIn = userInDb;
        ViewBag.AllMessages = _context.Messages.Include(a => a.Poster).OrderByDescending(d => d.CreatedAt).ToList();
        ViewBag.AllComments = _context.Comments.Include(a => a.Replies).OrderByDescending(d => d.CreatedAt).ToList();
            return View("Dashboard");
        }
    }
    public IActionResult Privacy()
    {
        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
