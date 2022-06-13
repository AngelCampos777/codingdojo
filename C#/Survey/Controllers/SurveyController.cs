using Microsoft.AspNetCore.Mvc; //service that brings in mvc functionality
namespace Survey.Controllers;     //be sure to use your own project's namespace!
public class SurveyController : Controller   //remember inheritance??
{
    //for each route this controller is to handle:
    [HttpGet]       //type of request
    [Route("")]     //associated route string (exclude the leading /)
    public ViewResult Index()
    {
        return View("Index");
    }
    [HttpGet("result")]
    public ViewResult Result()
    {

        return View("Result");
    }

    [HttpPost("process")]
    public IActionResult Process(string Name, string Location, string Language, string Comments)
    {
        ViewBag.Name = Name;
        ViewBag.Location = Location;
        ViewBag.Language = Language;
        ViewBag.Comments = Comments;
        return View("Result");
    }
}