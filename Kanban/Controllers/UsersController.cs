using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Kanban.Models;

namespace Kanban.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly KanbanDbContext _context;

        public UsersController(KanbanDbContext context)
        {
            _context = context;
        }

        // POST: api/Users
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<User>> PostUser(User user)
        {
          if (_context.Users == null)
          {
              return Problem("Entity set 'KanbanDbContext.Users'  is null.");
          }

            var existingUser = _context.Users
                  .Where(u => u.UserName == user.UserName
                  && u.UserEmail == user.UserEmail)
                  .FirstOrDefault();
            if (existingUser == null)
            {
                _context.Users.Add(user);
                await _context.SaveChangesAsync();
            }
            else
            {
                user = existingUser;
            }

            return CreatedAtAction("GetUser", new { id = user.UserId }, user);
        }
    }
}
