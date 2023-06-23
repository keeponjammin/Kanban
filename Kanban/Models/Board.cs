using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Kanban.Models
{
    public class Board
    {
        [Key]
        public int BoardId { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public required string BoardTitle { get; set; }

        [Column(TypeName = "nvarchar(250)")]
        public string? BoardDescription { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public required string BoardCreatedBy { get; set; }

    }
}
