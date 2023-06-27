namespace Kanban.Models
{
    public class InitialSection
    {
        public List<Section> GetInitialSections(int boardId)
        {
            List<string> sectionTitles = new() { "Backlogs", "Planned", "In Progress", "Completed" };
            List<Section> sections = new();
            int i = 0;
            foreach (var sectionTitle in sectionTitles) 
            { 
                sections.Add(GetSection(i, boardId, sectionTitle));
                i++;
            }

            return sections;
        }

        private static Section GetSection(int sectionOrderIndex, int boardId, string sectionTitle)
        {
            
            return new Section
            {
                SectionOrderIndex = sectionOrderIndex,
                BoardId = boardId,
                SectionTitle = sectionTitle,
                SectionDescription = "Initial create",
            };
        }
    }
}
