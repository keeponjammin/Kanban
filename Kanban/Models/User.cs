using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Kanban.Models
{
    public class User
    {

        [Key]
        public int UserId { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public required string UserName { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public required string UserEmail { get; set; }


    }
}
