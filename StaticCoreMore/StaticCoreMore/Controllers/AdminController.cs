using Microsoft.AspNetCore.Mvc;

namespace StaticCoreMore.Controllers
{
    public class AdminController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
