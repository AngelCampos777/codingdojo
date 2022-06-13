using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Survey2.Models;

namespace Survey2.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

    public IActionResult Index()
    {
        return View();
    }
    [HttpPost("process")]
    public IActionResult Process(Survey newSurvey)
    {
        if(ModelState.IsValid)
        {
            return RedirectToAction("Results", newSurvey);
        }else{
            return View("Index");
        }
        // Console.WriteLine(newSurvey.Name);
        // Console.WriteLine(newSurvey.Location);
        // Console.WriteLine(newSurvey.Language);
        // Console.WriteLine(newSurvey.Comments);
        // return RedirectToAction("Results", newSurvey);
    }
    [HttpGet("Results")]
    public IActionResult Results(Survey newSurvey)
    {
        ViewBag.Survey = newSurvey;
        return View(newSurvey);
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
