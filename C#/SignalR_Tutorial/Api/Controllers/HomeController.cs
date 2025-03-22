using Microsoft.AspNetCore.Mvc;

namespace SignalR_Tutorial.Controllers
{
    [ApiController]
    [Route("/")]
    public class HomeController : ControllerBase
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public int Get()
        {
            return 1;
        }
    }
}
