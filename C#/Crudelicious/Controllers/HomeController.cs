using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Crudelicious.Models;

namespace Crudelicious.Controllers;

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
        ViewBag.AllDishes = _context.Dishes.OrderByDescending(a => a.UpdatedAt).ToList();
        return View();
    }
    [HttpPost("dish/add")]
    public IActionResult AddDish(Dish newDish)
    {
        if(ModelState.IsValid)
        {
            _context.Add(newDish);
            _context.SaveChanges();
            return RedirectToAction("Index");
        } else {
            return View("index");
        }
    }
    //get one??
    [HttpGet("/dish/edit/{DishId}")]
    public IActionResult EditDish(int DishId)
    {
        Dish dishToEdit = _context.Dishes.FirstOrDefault(a => a.DishId == DishId);
        return View(dishToEdit);
    }
    [HttpPost("dish/update/{DishId}")]
    public IActionResult UpdateDish(int DishId, Dish UpdatedDish)
    {
        Dish oldDish = _context.Dishes.FirstOrDefault(a => a.DishId == DishId);
        oldDish.Name = UpdatedDish.Name;
        oldDish.Chef = UpdatedDish.Chef;
        oldDish.Tastiness = UpdatedDish.Tastiness;
        oldDish.Calories = UpdatedDish.Calories;
        oldDish.Description = UpdatedDish.Description;
        oldDish.UpdatedAt = DateTime.Now;
        _context.SaveChanges();
        return RedirectToAction("Index");
    }
        [HttpGet("/dish/delete/{DishId}")]
    public IActionResult DeleteDish(int DishId)
    {
        Dish dishToDelete = _context.Dishes.SingleOrDefault(a => a.DishId == DishId);
        _context.Dishes.Remove(dishToDelete);
        _context.SaveChanges();
        return RedirectToAction("Index");
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
