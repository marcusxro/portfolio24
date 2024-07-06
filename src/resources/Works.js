
//cuimages
import CUImage from '../mockups/cafe.png'
import CULanding from '../mockups/cuImages/landing.JPG'
import CUSignin from '../mockups/cuImages/signin.JPG'
import CUInventory from '../mockups/cuImages/inventory.JPG'
import CUSystem from '../mockups/cuImages/system.JPG'
import CUVideo from '../mockups/cuImages/video.mp4'


//riri images
import RRImage from '../mockups/orderingAPp.jpg'
import RRSIgnin from '../mockups/ririimages/signin.JPG'
import RRCart from '../mockups/ririimages/cart.JPG'
import RRHistory from '../mockups/ririimages/history.JPG'
import RRProfile from '../mockups/ririimages/profile.JPG'
import RRSystem from '../mockups/ririimages/system.JPG'
import RRVideo from '../mockups/ririimages/video.mp4'

//ulc images
import ULCImage from '../mockups/ulcImg.jpg'
import ULCSignin from '../mockups/ulcimages/signin.JPG'
import ULCSystem from '../mockups/ulcimages/system.JPG'
import ULCcontent from '../mockups/ulcimages/content.JPG'
import ULCSearch from '../mockups/ulcimages/search.JPG'
import ULCSearchedItem from '../mockups/ulcimages/searchedItem.JPG'
import ULCVideo from '../mockups/ulcimages/video.mp4'


//pcup images
import PCUPImage from '../mockups/pcupIt.jpg'
import PCUPsignin from '../mockups/pcupimages/signin.JPG'
import PCUPsystem from '../mockups/pcupimages/pcupSystem.JPG'
import PCUPcontent from '../mockups/pcupimages/content.JPG'
import PCUPmodal from '../mockups/pcupimages/modal.JPG'
import PCUPreport from '../mockups/pcupimages/report.JPG'
import PCUPvideo from '../mockups/pcupimages/video.mp4'


export const MyWorks = [
    {
        title: 'Cafe Eunoia',
        info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste quasi non porro sed. Cupiditate obcaecati praesentium aliquid error laborum consectetur numquam qui odit',
        role: [
            'Full-Stack Developer',
            'Web Designer',
            'Motion Designer',
            '3D Designer'
        ],
        techs: [
            'React',
            'JavaScript',
            'NodeJs',
            'ExpressJS',
            'Firebase',
            'MongoDB',
            'Gsap',
            'EmailJS',
        ],
        link: 'https://cafeeunoia.onrender.com/',
        images: [
            {src: CUImage, type: 'img'},
            {src: CULanding, type: 'img'},
            {src: CUVideo, type: 'vid'},
            {src: CUSystem, type: 'img'},
            {src: CUSignin, type: 'img'},
            {src: CUInventory, type: 'img'},
        ],
        next: "ririswrs"
    },
    {
        title: "Riri's WRS",
        info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste quasi non porro sed. Cupiditate obcaecati praesentium aliquid error laborum consectetur numquam qui odit',
        role: [
            'Full-Stack Developer',
            'Web Designer',
        ],
        techs: [
            'React',
            'JavaScript',
            'NodeJs',
            'ExpressJS',
            'Firebase',
            'EmailJS',
            'MongoDB'
        ],
        link: 'https://cafeeunoia.onrender.com/',
         images: [
            {src: RRImage, type: 'img'},
            {src: RRCart, type: 'img'},
            {src: RRVideo, type: 'vid'},
            {src: RRHistory, type: 'img'},
            {src: RRProfile, type: 'img'},
            {src: RRSIgnin, type: 'img'},
        ],
        next: "ulctelesales"
    },
    {
        title: "ULC Telesales",
        info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste quasi non porro sed. Cupiditate obcaecati praesentium aliquid error laborum consectetur numquam qui odit',
        role: [
            'Full-Stack Developer',
            'Web Designer',
            'Motion Designer',
        ],
        techs: [
            'React',
            'JavaScript',
            'Gsap',
            'Firebase',
        ],
        link: 'https://ulctelesales.com/',
        
         images: [
            {src: ULCImage, type: 'img'},
            {src: ULCSystem, type: 'img'},
            {src: ULCVideo, type: 'vid'},
            {src: ULCcontent, type: 'img'},
            {src: ULCSearch, type: 'img'},
            {src: ULCSearchedItem, type: 'img'},
        ],
        next: 'pcup'
    },
    {
        title: "PCUP",
        info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste quasi non porro sed. Cupiditate obcaecati praesentium aliquid error laborum consectetur numquam qui odit',
        role: [
            'Full-Stack Developer',
            'Web Designer',
            'Motion Designer',
            '3D Designer'
        ],
        techs: [
            'React',
            'JavaScript',
            'NodeJs',
            'ExpressJS',
            'Firebase',
            'MongoDB'
        ],

        link: 'https://pcupit.onrender.com/',
         images: [
            {src: PCUPImage, type: 'img'},
            {src: PCUPsignin, type: 'img'},
            {src: PCUPvideo, type: 'vid'},
            {src: PCUPsystem, type: 'img'},
            {src: PCUPcontent, type: 'img'},
            {src: PCUPmodal, type: 'img'},
        ],
        next: "melchorairs"
    },
    {
        title: "MELCHORA IRS",
        info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste quasi non porro sed. Cupiditate obcaecati praesentium aliquid error laborum consectetur numquam qui odit',
        role: [
            'Full-Stack Developer',
            'Web Designer',
            'Motion Designer',
            '3D Designer'
        ],
        techs: [
            'React',
            'JavaScript',
            'NodeJs',
            'ExpressJS',
            'Firebase',
            'MongoDB'
        ],
        link: 'https://melchoraclient.onrender.com/',
        images: [
            {src: CUImage, type: 'img'},
            {src: CULanding, type: 'img'},
            {src: CUVideo, type: 'vid'},
            {src: CUSystem, type: 'img'},
            {src: CUSignin, type: 'img'},
            {src: CUInventory, type: 'img'},
        ],
        next: "cafeeunoia"
    },
]