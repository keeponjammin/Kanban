import { v4 as uuidv4 } from 'uuid'

const InitialData = [
    {
        id: uuidv4(),
        title: 'Backlogs',
        tasks: [
            {
                id: uuidv4(),
                title: 'Learn JavaScript'
            },
            {
                id: uuidv4(),
                title: 'Learn Git'
            },
            {
                id: uuidv4(),
                title: 'Learn Python'
            },
        ]
    },
    {
        id: uuidv4(),
        title: 'Planned',
        tasks: [
        ]
    },
    {
        id: uuidv4(),
        title: 'In Progress',
        tasks: [
        ]
    },
    {
        id: uuidv4(),
        title: 'Completed',
        tasks: [
        ]
    },
]

export default InitialData