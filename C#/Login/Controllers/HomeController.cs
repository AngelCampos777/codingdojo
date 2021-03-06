using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Http;
using Login.Models;

namespace Login.Controllers;

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
            HttpContext.Session.SetInt32("user", newUser.UserId);
            return RedirectToAction("success");
        } else {
            return View("Index");
        }
    }
    [HttpGet("success")]
        public IActionResult Success()
        {
            if(HttpContext.Session.GetInt32("user") == null)
            {
                return RedirectToAction("index");
            }
            User loggedInUser = _context.Users.FirstOrDefault(a => a.UserId == (int)HttpContext.Session.GetInt32("user"));
            return View(loggedInUser);
        }
    public IActionResult Privacy()
    {
        return View();
    }
        [HttpPost("user/login")]
    public IActionResult Login(LogUser loginUser)
    {
        if(ModelState.IsValid)
        {
            var userInDb = _context.Users.FirstOrDefault(a => a.Email == loginUser.LogEmail);
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
                HttpContext.Session.SetInt32("user", userInDb.UserId);
                return RedirectToAction("success");
            }
        } else {
            return  View("Index");
        }
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
