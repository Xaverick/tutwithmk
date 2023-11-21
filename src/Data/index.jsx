import launchpadLogo from '../../src/assets/launchpadLogo.webp';
import transcend from '../../src/assets/transcend.webp';
import emerge from '../../src/assets/emerge.webp';
import Blogdata from './Blogdata/Blogdata';

import dollar from '../../src/assets/icons/dollar.png';
import confidential from '../../src/assets/icons/confidentiality.png';
import session from '../../src/assets/icons/session.png';
import duration from '../../src/assets/icons/duration.png';


// let link = '';
// (process.env.NODE_ENV === 'production') ?   link = "http://transformwithmk.com" : link = 'http://localhost:5173';



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


import transcendTimeline1 from '../../src/assets/icons/transcendTimeline1.png';
import transcendTimeline2 from '../../src/assets/icons/transcendTimeline2.png';
import transcendTimeline3 from '../../src/assets/icons/transcendTimeline3.png';
import transcendTimeline4 from '../../src/assets/icons/transcendTimeline4.png';
import transcendTimeline5 from '../../src/assets/icons/transcendTimeline5.png';

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

const launchpadProgramDetail= [
    {
        icon: duration,
        heading: 'Duration.',
        content:"6 Sessions 60 mins each.",
    },
    {
        icon: session,
        heading: 'Session.',
        content:"1-on-1",
    },
    {   
        icon: dollar,
        heading: 'Pricing.',
        content:"$ 5,500",
    },
    {   
        icon: confidential,
        heading: 'Confidentiality.',
        content:"These are Confidential Sessions",
    },
]

const emergeProgramdetail = [
    {
        icon: session,
        heading: 'Session.',
        content:"1-on-1",
    },
    {   
        icon: dollar,
        heading: 'Pricing.',
        content:"$ 11,000",
    },
    {   
        icon: confidential,
        heading: 'Confidentiality.',
        content:"These are Confidential Sessions",
    },
    
]


const transcendProgramDetail = [

    {
        icon: session,
        heading: 'Session.',
        content:"1-on-1",
    },
    {   
        icon: dollar,
        heading: 'Pricing.',
        content:"$ 21,000",
    },
    {   
        icon: confidential,
        heading: 'Confidentiality.',
        content:"These are Confidential Sessions",
    },
    
]


const ownthatstageProgramDetail = [

    {
        icon: session,
        heading: 'Session.',
        content:"1-on-1",
    },
    {   
        icon: dollar,
        heading: 'Pricing.',
        content:"$ 16,660",
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
        icon: transcendTimeline1,
        content:"Power of Concentration & Focus on Anything+Anytime!",
    },
    {
        icon: transcendTimeline2,
        content:"Rule over your Fears+Trigger Points+Compulsions!",
    },
    {
        icon: transcendTimeline3,
        content:"Control over People's Communications & Actions!",
    },
    {
        icon: transcendTimeline4,
        content:"For the 1st time – Your Emotional & Mental Stability, Both!",
    },
    {
        icon: transcendTimeline5,
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
        content:"Your Life's Analysis",
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
        url: `/services/launchpad`
    },
    {
        icon: emerge,
        title: 'Emerge',
        content: "",
        url: `/services/emerge`
    },
    {
        icon: transcend,
        title: 'Transcend',
        content: "",
        url: `/services/transcend`
    },

]

const legacyRoute = [
    {
        icon: launchpadLogo,
        title: 'LaunchPad',
        content: ["Your Take off:", "Needs your own Launchpad." , "That's it!"],
        url: `/services/launchpad`
    },
    {
        icon: emerge,
        title: 'Emerge',
        content: ["You have been hiding.", "It's time You EMERGE!","","","","",""],
        url: `/services/emerge`
    },
    {
        icon: transcend,
        title: 'Transcend',
        content: ["Winners Perform Excellence." , "They are in their Orbit.", "It's time you command Yours!"],
        url: `/services/transcend`
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
    coffeeProgramdetail,
    launchpadProgramDetail,
    transcendProgramDetail,
    ownthatstageProgramDetail
}