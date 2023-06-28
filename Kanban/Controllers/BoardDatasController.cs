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
    public class BoardDatasController : ControllerBase
    {
        private readonly KanbanDbContext _context;

        public BoardDatasController(KanbanDbContext context)
        {
            _context = context;
        }

        // GET: api/BoardDatas
        [HttpGet]
        public async Task<ActionResult<IEnumerable<BoardData>>> GetBoardData()
        {
          if (_context.BoardData == null)
          {
              return NotFound();
          }
            return await _context.BoardData.ToListAsync();
        }

        // GET: api/BoardDatas/5
        [HttpGet("{id}")]
        public async Task<ActionResult<BoardData>> GetBoardData(int id)
        {
          if (_context.BoardData == null)
          {
              return NotFound();
          }
            //var boardData = await _context.BoardData.FindAsync(id);
            var boardData = await _context.BoardData.Where(x => x.BoardId == id).ToListAsync();

            if (boardData == null || boardData?.Count != 1)
            {
                return NotFound();
            }

            return boardData.FirstOrDefault();
        }

        // PUT: api/BoardDatas/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBoardData(int id, BoardData boardData)
        {
            if (id != boardData.BoardId)
            {
                return BadRequest();
            }

            _context.Entry(boardData).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BoardDataExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/BoardDatas
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<BoardData>> PostBoardData(BoardData boardData)
        {
          if (_context.BoardData == null)
          {
              return Problem("Entity set 'KanbanDbContext.BoardData'  is null.");
          }
            _context.BoardData.Add(boardData);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetBoardData", new { id = boardData.BoardId }, boardData);
        }

        // DELETE: api/BoardDatas/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBoardData(int id)
        {
            if (_context.BoardData == null)
            {
                return NotFound();
            }
            var boardData = await _context.BoardData.FindAsync(id);
            if (boardData == null)
            {
                return NotFound();
            }

            _context.BoardData.Remove(boardData);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool BoardDataExists(int id)
        {
            return (_context.BoardData?.Any(e => e.BoardId == id)).GetValueOrDefault();
        }
    }
}
