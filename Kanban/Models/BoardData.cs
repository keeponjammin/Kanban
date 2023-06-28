using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Kanban.Models
{
    public class BoardData
    {
        [Key]
        public int BoardDataId { get; set; }

        [Column]
        public int BoardId { get; set; }

        [Column]
        public required string Data { get; set; }
    }
}
