using DatingApp.Helpers;
using System.Text.Json;

namespace DatingApp.Extensions
{
    public static class HttpExtensions
    {
        public static void AddPaginationHeader(this HttpResponse response, PaginationHeader header)
        {
            var jsonOption = new JsonSerializerOptions { PropertyNamingPolicy = JsonNamingPolicy.CamelCase };
            response.Headers.Append("Pagination", JsonSerializer.Serialize(header,jsonOption));
            response.Headers.Append("Access-Control-Expose-Headers", "Pagination");
        }
    }
}
