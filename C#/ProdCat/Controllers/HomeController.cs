using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using ProdCat.Models;
using Microsoft.EntityFrameworkCore;

namespace ProdCat.Controllers;

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
        ViewBag.AllProducts = _context.Products.Include(s => s.CategoriesOfProduct).ThenInclude(d => d.Category).ToList();
        return View();
    }
    [HttpPost("product/add")]
    public IActionResult AddProduct(Product newProduct)
    {
        if(ModelState.IsValid)
        {
            _context.Add(newProduct);
            _context.SaveChanges();
            return RedirectToAction("Index");
        } else{
            ViewBag.AllProducts = _context.Products.Include(s => s.CategoriesOfProduct).ThenInclude(d => d.Category).ToList();
            return View("Index");
        }
    }
    [HttpGet("AllCategories")]
    public IActionResult AllCategories()
    {
        ViewBag.AllCategories = _context.Categories.ToList();
        return View();
    }

    public IActionResult Privacy()
    {
        return View();
    }
    [HttpPost("category/add")]
    public IActionResult AddCategory(Category newCategory)
    {
        if(ModelState.IsValid)
        {
            _context.Add(newCategory);
            _context.SaveChanges();
            return RedirectToAction("AllCategories");
        } else{
            ViewBag.AllCategories = _context.Categories.ToList();
            return View("AllCategories");
        }
    }
    [HttpGet("AddToCategory")]
    public IActionResult AddToCategory()
    {
        ViewBag.AllProducts = _context.Products.ToList();
        ViewBag.AllCategories = _context.Categories.ToList();
        return View();
    }
    [HttpPost("association/add")]
    public IActionResult AddAssociation(Association newAssociation)
    {
                if(ModelState.IsValid)
        {
            _context.Add(newAssociation);
            _context.SaveChanges();
            return RedirectToAction("AddToCategory");
        } else{
            return View("AddToCategory");
        }
    }
    [HttpGet("/product/{ProductId}")]
    public IActionResult RenderProduct(int ProductId)
    {
        ViewBag.singleProduct = _context.Products.Include(p => p.CategoriesOfProduct).ThenInclude(c => c.Category).FirstOrDefault(p => p.ProductId == ProductId);
        ViewBag.AllCategories = _context.Categories.Include(d => d.ProductsInCategory).ThenInclude(p => p.Product).Where(d =>(!d.ProductsInCategory.Any(d => d.ProductId == ProductId))).ToList();
        return View("RenderProduct");
    }
    [HttpGet("/category/{CategoryId}")]
    public IActionResult RenderCategory(int CategoryId)
    {
        ViewBag.singleCategory = _context.Categories.Include(p => p.ProductsInCategory).ThenInclude(c => c.Product).FirstOrDefault(p => p.CategoryId == CategoryId);
        ViewBag.AllProducts = _context.Products.Include(d => d.CategoriesOfProduct).ThenInclude(p => p.Category).Where(d =>(!d.CategoriesOfProduct.Any(d => d.CategoryId == CategoryId))).ToList();
        return View("RenderCategory");
    }
    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
