using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
    [Route("/")]
    public class HomeController : ControllerBase
    {
        [HttpGet]
        public ActionResult<int> Index()
        {
            return Ok(1);
        }
    }
}
