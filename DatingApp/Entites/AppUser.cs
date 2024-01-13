using System.ComponentModel.DataAnnotations;

namespace DatingApp.Entites
{
    public class AppUser
    {
        [Key]
        public int Id { get; set; }
        public string UserName  { get; set; }
    }
}
