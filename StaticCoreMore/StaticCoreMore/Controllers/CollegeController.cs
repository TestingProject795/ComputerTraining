using Microsoft.AspNetCore.Mvc;

namespace StaticCoreMore.Controllers
{
    public class CollegeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
