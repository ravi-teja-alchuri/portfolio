import one from '../assets/svg/projects/one.svg'
import two from '../assets/svg/projects/two.svg'
import three from '../assets/svg/projects/three.svg'
import four from '../assets/svg/projects/four.svg'
import five from '../assets/svg/projects/five.svg'
import six from '../assets/svg/projects/six.svg'
import seven from '../assets/svg/projects/seven.svg'
import eight from '../assets/svg/projects/eight.svg'
import nine from '../assets/svg/projects/nine.svg'
import ten from '../assets/svg/projects/ten.svg'
import thirteen from '../assets/svg/projects/thirteen.svg'

import socket from '../assets/svg/projects/socket.svg'

export const projectsData = [
    {
        id: 1,
        projectName: 'Analysis of Smart Contracts',
        projectDesc: 'Static analysis of Ethereum Smart Contracts to detect vulnerabilities using ANTLR v4',
        tags: ['Java', 'ANTLR', 'Solidity'],
        code: 'https://github.com/ravi-teja-alchuri/smart-contract-analysis-tool',
        demo: 'https://github.com/ravi-teja-alchuri/smart-contract-analysis-tool',
        image: thirteen
    },
    {
        id: 2,
        projectName: 'Diabetes Tracker',
        projectDesc: 'An application designed for diabetic patients to keep track of their blood glucose level and automatically calculate the insulin amount to be taken when the glucose level becomes abnormal',
        tags: ['Java', 'Spring Boot', 'Angular'],
        code: 'https://github.com/ravi-teja-alchuri/diab-trkr-backend',
        demo: 'https://github.com/ravi-teja-alchuri/diab-trkr-ui',
        image: ten
    },
    {
        id: 3,
        projectName: 'Directory Synchronization system',
        projectDesc: 'Lock/Unlock files and directory synchronization with interprocess communication using sockets',
        tags: ['Python', 'Socket', 'TCP'],
        code: 'https://github.com/ravi-teja-alchuri/inter-process-communication',
        demo: 'https://github.com/ravi-teja-alchuri/inter-process-communication',
        image: socket
    },
   
]
