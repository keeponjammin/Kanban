using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Kanban.Models
{
    public class Card
    {
        [Key]
        public int CardId { get; set; }

        public int CardOrderIndex { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public required string CardTitle { get; set; }

        [Column(TypeName = "nvarchar(250)")]
        public required string CardText { get; set; }

        public int CardCreatedByUserId { get; set; }

        public int SectionId { get; set; }


    }
}
