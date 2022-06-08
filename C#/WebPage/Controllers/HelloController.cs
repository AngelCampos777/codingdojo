using Microsoft.AspNetCore.Mvc; //service that brings in mvc functionality
namespace WebPage.Controllers;     //be sure to use your own project's namespace!
public class HelloController : Controller   //remember inheritance??
{
    //for each route this controller is to handle:
    [HttpGet]       //type of request
    [Route("")]     //associated route string (exclude the leading /)
    public ViewResult Index()
    {
        return View("Index");
    }
    [HttpGet("second")]
    public string Second()
    {
        return "Back at it again.";
    }
        [HttpGet("third/{name}")]
    public ViewResult NameRoute(string name)
    {
        ViewBag.Name = name;
        ViewBag.MyArr = new int[5] {1,2,3,4,5};
        return View("Third");
    }
}