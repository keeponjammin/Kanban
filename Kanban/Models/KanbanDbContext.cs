using Microsoft.EntityFrameworkCore;

namespace Kanban.Models
{
    public class KanbanDbContext :DbContext
    {
        public KanbanDbContext(DbContextOptions<KanbanDbContext> options) : base(options) 
        {
            
        }

        public DbSet<User> Users { get; set; }
        public  DbSet<Board> Boards { get; set; }
        public DbSet<Section> Sections { get; set; }
        public DbSet<Card> Cards { get; set; }
    }
}
