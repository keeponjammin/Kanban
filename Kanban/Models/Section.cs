using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Kanban.Models
{
    public class Section
    {

        [Key] 
        public int SectionId { get; set; }

        public int SectionOrderIndex { get; set; }

        public int SectionCreatedById { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public required string SectionTitle { get; set; }

        [Column(TypeName = "nvarchar(250)")]
        public string? SectionDescription { get; set; }
    }
}
