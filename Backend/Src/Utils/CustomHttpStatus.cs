using Microsoft.AspNetCore.Mvc;

namespace verzel.Utils {
    public class CustomHttpStatus : ObjectResult, IActionResult {
        public CustomHttpStatus(int statusCode, object message) : base(message) {
            StatusCode = statusCode;
        }
    }
}