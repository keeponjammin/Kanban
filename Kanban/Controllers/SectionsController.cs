﻿using System;
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
    public class SectionsController : ControllerBase
    {
        private readonly KanbanDbContext _context;

        public SectionsController(KanbanDbContext context)
        {
            _context = context;
        }

        // GET: api/Sections
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Section>>> GetSections()
        {
          if (_context.Sections == null)
          {
              return NotFound();
          }
            return await _context.Sections.ToListAsync();
        }

        // GET: api/Sections/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Section>> GetSection(int id)
        {
          if (_context.Sections == null)
          {
              return NotFound();
          }
            var section = await _context.Sections.FindAsync(id);

            if (section == null)
            {
                return NotFound();
            }

            return section;
        }

        // PUT: api/Sections/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSection(int id, Section section)
        {
            if (id != section.SectionId)
            {
                return BadRequest();
            }

            _context.Entry(section).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SectionExists(id))
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

        // POST: api/Sections
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Section>> PostSection(Section section)
        {
        if (_context.Sections == null)
        {
            return Problem("Entity set 'KanbanDbContext.Sections'  is null.");
        }
        else
        {
            _context.Sections.Add(section);
        }
        await _context.SaveChangesAsync();

        return CreatedAtAction("GetSection", new { id = section.SectionId }, section);
        }

        //POST: api/InitialSections
        [HttpPost("{id}")]
        public async Task<ActionResult<Section>> PostSection(int id)
        {
            if (_context.Sections == null)
            {
                return Problem("Entity set 'KanbanDbContext.Sections'  is null.");
            }
            else
            {
                InitialSection initialSection = new();
                List<Section> sections = initialSection.GetInitialSections(id);
                foreach(Section section in sections)
                {
                    _context.Sections.Add(section);
                }
            }
            await _context.SaveChangesAsync();
            return NoContent();
        }


        // DELETE: api/Sections/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSection(int id)
        {
            if (_context.Sections == null)
            {
                return NotFound();
            }
            var section = await _context.Sections.FindAsync(id);
            if (section == null)
            {
                return NotFound();
            }

            _context.Sections.Remove(section);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool SectionExists(int id)
        {
            return (_context.Sections?.Any(e => e.SectionId == id)).GetValueOrDefault();
        }
    }
}
