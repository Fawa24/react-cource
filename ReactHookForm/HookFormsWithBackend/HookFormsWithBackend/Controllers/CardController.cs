using Microsoft.AspNetCore.Mvc;

namespace HookFormsWithBackend.Controllers
{
    public class Card
    {
        public string Name { get; set; }
        public string Description { get; set; }
    }

    [Route("/")]
    public class CardController : Controller
    {
        [HttpPost]
        public ActionResult SaveCard([FromBody] Card card)
        {
            var name = card.Name;
            var description = card.Description;

            return Ok();
        }
    }
}
