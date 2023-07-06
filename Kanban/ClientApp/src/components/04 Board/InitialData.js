import { v4 as uuidv4 } from 'uuid';

const initialData = [
  {
    id: uuidv4(),
    title: 'Backlogs',
    tasks: [
      {
        id: uuidv4(),
        title: 'Create cards',
      },
    ],
  },
  {
    id: uuidv4(),
    title: 'Planned',
    tasks: [],
  },
  {
    id: uuidv4(),
    title: 'In Progress',
    tasks: [],
  },
  {
    id: uuidv4(),
    title: 'Completed',
    tasks: [],
  },
];

export default initialData;
