using Microsoft.AspNetCore.Mvc; //service that brings in mvc functionality
namespace Survey.Controllers;     //be sure to use your own project's namespace!
public class ThingController : Controller   //remember inheritance??
{
    //for each route this controller is to handle:
    [HttpGet]       //type of request
    [Route("")]     //associated route string (exclude the leading /)
    public ViewResult Index()
    {
        return View("Index");
    }
        [HttpGet("result")]
    public ViewResult Result(string name)
    {

        return View("Result");
    }

    [HttpPost("process")]
    public RedirectToActionResult Process(string Name, string Species, int Age)
    {
        Console.WriteLine($"Name:    {Name}");
        Console.WriteLine($"Species: {Species}");
        Console.WriteLine($"Age:     {Age}");
        return RedirectToAction("Result");
    }
}