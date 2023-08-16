import launchpadLogo from '../../src/assets/launchpadLogo.png';
import transcend from '../../src/assets/transcend.png';
import emerge from '../../src/assets/emerge.png';
import Blogdata from './Blogdata/Blogdata';

import dollar from '../../src/assets/icons/dollar.png';
import location from '../../src/assets/icons/location.png';
import confidential from '../../src/assets/icons/confidentiality.png';
import session from '../../src/assets/icons/session.png';


import emergeTimeline1 from '../../src/assets/icons/emergeTimeline1.png';
import emergeTimeline2 from '../../src/assets/icons/emergeTimeline2.png';
import emergeTimeline3 from '../../src/assets/icons/emergeTimeline3.png';
import emergeTimeline4 from '../../src/assets/icons/emergeTimeline4.png';
import emergeTimeline5 from '../../src/assets/icons/emergeTimeline5.png';
import emergeTimeline6 from '../../src/assets/icons/emergeTimeline6.png';


import launchpadTimeline1 from '../../src/assets/icons/launchpadTimeline1.png';
import launchpadTimeline2 from '../../src/assets/icons/launchpadTimeline2.png';
import launchpadTimeline3 from '../../src/assets/icons/launchpadTimeline3.png';
import launchpadTimeline4 from '../../src/assets/icons/launchpadTimeline4.png';
import launchpadTimeline5 from '../../src/assets/icons/launchpadTimeline5.png';

import confidential2 from '../../src/assets/icons/5.png';




const emergeTimeline = [
    {
      icon: emergeTimeline1,
      content:"You – Your Mind – Your Body",
    },
    {
        icon: emergeTimeline2,
        content:"Your Life + Life's Blueprint",
    },
    {
        icon: emergeTimeline3,
        content:"Scales of your Existence",
    },
    {   
        icon:  emergeTimeline4,
        content:"Dissecting Your Countless Concerns",
    },
    {
        icon: emergeTimeline5,
        content:"Igniting Your 24 Carat Gold Power",
    },
    {
        icon: emergeTimeline6,
        content:"Money – Work – Sex",
    },
]

const emergeProgramdetail = [
    {
        icon: confidential,
        heading: 'Duartion.',
        content:"Scales of your Existence",
    },
    {
        icon: session,
        heading: 'Session.',
        content:"1-on-1",
    },
    {
        icon: location,
        heading: 'Location.',
        content:"6 Sessions 60 mins each.",
    },

    {   
        icon: dollar,
        heading: 'Pricing.',
        content:"$ 300",
    },
    {   
        icon: confidential,
        heading: 'Confidentiality.',
        content:"These are Confidential Sessions",
    },
    
]

const coffeeProgramdetail = [

    {
        icon: '',
        heading: 'Session.',
        content:"1-on-1",
    },
    {
        icon: '',
        heading: 'Pricing.',
        content:"$ 300",
    },

    {   
        icon: '',
        heading: 'Confidentiality.',
        content:"These are Confidential Sessions",
    },
    
]


const transcendTimeline = [
    {
        icon: '',
        content:"Power of Concentration & Focus on Anything+Anytime!",
    },
    {
        icon: '',
        content:"Rule over your Fears+Trigger Points+Compulsions!",
    },
    {
        icon: '',
        content:"Control over People's Communications & Actions!",
    },
    {
        icon: '',
        content:"For the 1st time – Your Emotional & Mental Stability, Both!",
    },
    {
        icon: '',
        content:"Rare Practicals on 'Power of Intention' to Manifest Things in Life! & More – Confidential Data",
    },
  
   
   
]

const LaunchPadtimeline = [
    {
      icon: launchpadTimeline1,
      content:"Orient Yourself in \"The Present\" ",
    },
    {
        icon:  launchpadTimeline2,
        content:"Your Life's Analyses",
    },
    {
        icon: launchpadTimeline3,
        content:"Destination & Weaknesses",
    },
    {   
        icon: launchpadTimeline4,
        content:"Past Failures & Other People",
    },
    {
        icon: launchpadTimeline5,
        content:"Unlock the Future",
    },
]


const ProgramDetail = [
    {
        icon: launchpadLogo,
        title: 'LaunchPad',
        content: "",
        url: 'https://tutorialwitmk.onrender.com/services/launchpad'
    },
    {
        icon: emerge,
        title: 'Emerge',
        content: "",
        url: 'https://tutorialwitmk.onrender.com/services/emerge'
    },
    {
        icon: transcend,
        title: 'Transcend',
        content: "",
        url: 'https://tutorialwitmk.onrender.com/services/transcend'
    },
    // {
    //     icon: '' ,
    //     title: 'Own That Stage',
    //     content: "",
    //     url: 'https://tutorialwitmk.onrender.com/services/ownthatstage'
    // }
]

const legacyRoute = [
    {
        icon: launchpadLogo,
        title: 'LaunchPad',
        content: ["Your Take off:", "Needs your own Launchpad." , "That's it!"],
        url: 'http://localhost:5173/services/launchpad'
    },
    {
        icon: emerge,
        title: 'Emerge',
        content: ["You have been hiding.", "It's time You EMERGE!"],
        url: 'http://localhost:5173/services/emerge'
    },
    {
        icon: transcend,
        title: 'Transcend',
        content: ["Winners Perform Excellence." , "They are in their Orbit.", "It's time you command Yours!"],
        url: 'http://localhost:5173/services/transcend'
    },
]

const BlogData = Blogdata;


export{
    emergeTimeline,
    emergeProgramdetail,
    transcendTimeline,
    LaunchPadtimeline,
    ProgramDetail,
    legacyRoute,
    BlogData,
    coffeeProgramdetail
}