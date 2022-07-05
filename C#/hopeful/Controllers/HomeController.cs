using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using hopeful.Models;

namespace hopeful.Controllers;

public class HomeController : Controller
{
    private MyContext _context;
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger,MyContext context)
    {
        _logger = logger;
        _context = context;
    }

    public IActionResult Index()
    {
        return View();
    }

    [HttpGet("About")]
    public IActionResult About()
    {
        return View();
    }

    [HttpGet("Help")]
    public IActionResult Help()
    {
        return View();
    }

    [HttpGet("Forms")]
    public IActionResult Forms()
    {
        return View();
    }

    [HttpGet("Contact")]
    public IActionResult Contact()
    {
        return View();
    }
    [HttpPost("Comment")]
    public IActionResult Comment(Comment newComment)
    {
        if(ModelState.IsValid)
        {
            _context.Add(newComment);
            _context.SaveChanges();
            return RedirectToAction("Index");
        } else{
            return View("Contact");
        }
    }

    [HttpGet("/Adopt")]
    public IActionResult Adopt()
    {
        return View();
    }

    [HttpGet("/Foster")]
    public IActionResult Foster()
    {
        return View();
    }

    [HttpGet("/Volunteer")]
    public IActionResult Volunteer()
    {
        return View();
    }

    [HttpGet("/Donate")]
    public IActionResult Donate()
    {
        return View();
    }

    [HttpGet("/Wishlist")]
    public IActionResult Wishlist()
    {
        return View();
    }

    [HttpGet("/Events")]
    public IActionResult Events()
    {
        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
