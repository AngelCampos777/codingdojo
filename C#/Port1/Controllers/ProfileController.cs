using Microsoft.AspNetCore.Mvc; //service that brings in mvc functionality
namespace Port1.Controllers;     //be sure to use your own project's namespace!
public class ProfileController : Controller   //remember inheritance??
{
    //for each route this controller is to handle:
    [HttpGet]       //type of request
    [Route("")]     //associated route string (exclude the leading /)
    public ViewResult Index()
    {
        ViewBag.CurrentTime = DateTime.Now;
        return View("Index");
    }
    [HttpGet("projects")]
    public ViewResult Projects()
    {
        return View("Projects");
    }
    [HttpGet("contacts")]
    public ViewResult Contacts()
    {
        return View("Contacts");
    }
    [HttpPost("process")]
    
    public RedirectToActionResult Process()
        {
            return RedirectToAction("Contacts");
        }
    
}