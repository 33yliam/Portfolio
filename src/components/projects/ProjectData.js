import { projectImages } from "../../strings";
import { Link } from 'react-router-dom';

const projects = [
    {
        title: 'Wumpus World',
        type: 'College Mini Project - Game',
        image: projectImages.wumpusWorld.preview,
        date: 'January, 2022',
        description: <>
            It's pits and Wumpus against you and your arrows. Do you have what it takes to get the gold?
            <br />
            A game developed to demonstrate knowledge-based agent and knowledge representation in <Link to=''>Artificial Intelligence</Link>, spiced up with <Link to=''>Hand Gesture recognition</Link> (allowing players to control the agent using hand gestures).
            <br />
            <li>A group project with <a href='https://www.linkedin.com/' target='_blank' rel='noreferrer'>Charitha</a>, <a href='https://www.linkedin.com/' target='_blank' rel='noreferrer'>Dhriti</a>, and <a href='https://www.linkedin.com/' target='_blank' rel='noreferrer'>Sudeep</a>.</li>
        </>,
        tools: ['/images/icons/python.png', '/images/icons/pygame.png', '/images/icons/mediapipe.png'],
        toolsDesc: ['Python', 'PyGame', 'MediaPipe'],
        link: '/p/wumpus-world',
        github: 'https://github.com/33yliam/Wumpus-World',
        in: true,
        download: 'https://www.33yliam.com/',
        tag: ['college'],
    },
    {
        title: 'BoardSider Beta',
        type: 'Website',
        image: projectImages.boardsider.web.preview,
        date: 'December, 2021',
        description: <>
            A portfolio builder platform for Esports teams and players, and a result & leaderboard management tool for Esports event organizers.
        </>,
        tools: ['/images/icons/react-original.svg', '/images/icons/firebase.png'],
        toolsDesc: ['React', 'Firebase'],
        link: 'https://boardsider.com/',
    },
];

export default projects;
