using Microsoft.AspNetCore.Identity;

namespace DatingApp.Entites
{
    public class AppRole : IdentityRole<int>
    {
        public ICollection<AppUserRole> UserRoles { get; set; }
    }
}
