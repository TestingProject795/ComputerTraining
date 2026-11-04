using Microsoft.AspNetCore.Mvc;

namespace StaticCoreMore.Controllers
{
    public class User1Controller : Controller
    {
        public IActionResult Index() { return View(); }
        public IActionResult School() { return View(); }
        public IActionResult Teacher() { return View(); }
        public IActionResult Student() { return View(); }
        public IActionResult StudentList() { return View(); }
        public IActionResult StudentProfile() { return View(); }
        public IActionResult Widgets() { return View(); }
        public IActionResult InvoiceCreate() { return View(); }
        public IActionResult InvoiceView() { return View(); }
        public IActionResult InvoiceList() { return View(); }

        public IActionResult InvoiceListt() { return View(); }
    }
}
