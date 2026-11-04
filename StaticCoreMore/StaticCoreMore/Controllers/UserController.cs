using Microsoft.AspNetCore.Mvc;

namespace StaticCoreMore.Controllers
{
    public class UserController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
