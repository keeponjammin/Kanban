using Microsoft.EntityFrameworkCore;
using Kanban.Models;

namespace Kanban.Models
{
    public class KanbanDbContext :DbContext
    {
        public KanbanDbContext(DbContextOptions<KanbanDbContext> options) : base(options) 
        {
            
        }

        public DbSet<User> Users { get; set; }
        public  DbSet<Board> Boards { get; set; }
        public DbSet<Kanban.Models.BoardData> BoardData { get; set; } = default!;
    }
}
