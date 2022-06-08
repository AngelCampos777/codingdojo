using Microsoft.AspNetCore.Mvc; //service that brings in mvc functionality
namespace Port1.Controllers;     //be sure to use your own project's namespace!
public class HelloController : Controller   //remember inheritance??
{
    //for each route this controller is to handle:
    [HttpGet]       //type of request
    [Route("")]     //associated route string (exclude the leading /)
    public string Index()
    {
        return "This is from index.";
    }
    [HttpGet("projects")]
    public string Projects()
    {
        return "These are my projects.";
    }
        [HttpGet("contact")]
    public string Contact()
    {
        return "This is how you can contact me.";
    }
}