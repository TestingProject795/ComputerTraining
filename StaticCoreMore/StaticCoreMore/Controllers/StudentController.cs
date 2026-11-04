using Microsoft.AspNetCore.Mvc;

namespace StaticCoreMore.Controllers
{
    public class StudentController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
