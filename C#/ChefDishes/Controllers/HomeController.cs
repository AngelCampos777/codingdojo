using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ChefDishes.Models;

namespace ChefDishes.Controllers;

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
        ViewBag.AllChefs = _context.Chefs.Include(a => a.CreatedDishes).ToList();
        return View();
    }
    [HttpGet("addChef")]
    public IActionResult addChef()
    {

        return View("addChef");
    }

    [HttpPost("chef/add")]
    public IActionResult AddChef(Chef newChef)
    {
        if(ModelState.IsValid)
        {
            _context.Add(newChef);
            _context.SaveChanges();
            return RedirectToAction("Index");
        } else {
            ViewBag.AllChefs = _context.Chefs.ToList();
            return View("addChef");
        }
    }


        [HttpGet("Dish")]
    public IActionResult Dish()
    {
        ViewBag.AllDishes = _context.Dishes.Include(a => a.Chef).ToList();
        ViewBag.AllChefs = _context.Chefs.ToList();
        return View("Dish");
    }
        [HttpGet("addDish")]
    public IActionResult addDish()
    {
        ViewBag.AllChefs = _context.Chefs.ToList();
        return View("addDish");
    }
    [HttpPost("dish/add")]
    public IActionResult AddDish(Dish newDish)
    {
        if(ModelState.IsValid)
        {
            _context.Add(newDish);
            _context.SaveChanges();
            return RedirectToAction("Dish");
        } else {
            ViewBag.AllDishes = _context.Dishes.ToList();
            ViewBag.AllChefs = _context.Chefs.ToList();
            return View("addDish");
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
