using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Passcode2.Models;
using Microsoft.AspNetCore.Http;

namespace Passcode2.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }
static string options = "0123456789abcdefghijklmnopqrstuvwxyz";
static int counter;
    [HttpGet("")]
    public IActionResult Index()
    {
        counter = 1;
        return View();
    }
    [HttpGet("generate")]
    public IActionResult Generate()
    {
        Random rand = new Random();
        string code = "";
        for(int val = 0; val < 15; val++)
            {
                char letter = options[(rand.Next(0,options.Length))];
                code += letter;
            }
            HttpContext.Session.SetString("Pass", code);
            string? Pass = HttpContext.Session.GetString("Pass");
            // Console.WriteLine(Pass);
            HttpContext.Session.SetInt32("Counter", counter++);
            int? Counter = HttpContext.Session.GetInt32("Counter");
        return View("Index");
    }
    [HttpGet("delete")]
    public IActionResult deleteSession()
    {
        HttpContext.Session.Clear();
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
