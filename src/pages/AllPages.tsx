import React, { useEffect, useState } from 'react'
import Header from '../comp/Header'
import gsap from 'gsap'


import mingleImg from '../mockups/Mingle/mingleMockup.jpg'

import projectOne from '../mockups/cafe.png'
import projectTwo from '../mockups/ulcImg.jpg'
import projectThree from '../mockups/creativeDev.jpg'
import projectFour from '../mockups/devanImg.jpg'
import projectFive from '../mockups/melchoraScanner.jpg'
import projectSix from '../mockups/oldPort.jpg'
import projectSeven from '../mockups/pcupIt.jpg'
import projectEigth from '../mockups/orderingAPp.jpg'
import projectNine from '../mockups/branding.jpg'
import projectTen from '../mockups/ForCast.jpg'

import SplitType from 'split-type'
import Footer from '../comp/Footer'
import { ScrollTrigger } from 'gsap/all'

import Marquee from 'react-fast-marquee'
import ScrollToTop from '../comp/ScrollToTop'

const AllPages: React.FC = () => {

    const [isAllowed, setIsAllowed] = useState<boolean>(false)

    useEffect(() => {

        new SplitType('.AllPages .content .landingText .big', { types: 'words' })

        new SplitType('.AllPages .content .landingText .paragraph', { types: 'words,chars' })



        gsap.to('.AllPages .content .landingText .big .word', {
            opacity: 1,
            duration: 0,
            stagger: .5,
            delay: 0.5,
            onComplete: () => {
                gsap.to('.AllPages header', {
                    opacity: 1,
                    delay: 1
                })

                setTimeout(() => {
                    setIsAllowed(true)
                }, 1000);

                gsap.to('.AllPages .content .landingText .paragraph .word .char', {
                    y: 0,
                    stagger: 0.01,
                    delay: 1
                })
                gsap.to('.AllPages .footer', {
                    opacity: 1,
                    delay: 1
                })
            }
        })

    }, [])

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        const itemHover: NodeListOf<HTMLElement> = document.querySelectorAll('.AllPages .content .imageCon .imageContainer .imageItem')
        if (isAllowed) {

            itemHover.forEach((itm) => {
                gsap.to(itm.querySelector('img'), {
                    height: '100%',
                    ease: 'bounce',
                    stagger: 0.5,
                    scrollTrigger: {
                        trigger: itm,
                        start: 'top 80%',
                        end: 'bottom',
                    }
                })

            })


        }
    }, [isAllowed])



    const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);

    useEffect(() => {
        if (isAllowed) {
            const itemHover = document.querySelectorAll('.AllPages .content .imageCon .imageContainer .imageItem');

            const revealText = (itm: Element) => {
                gsap.to(itm.querySelector('.circle'), {
                    opacity: 1,
                    duration: 0.5
                });
            };


            itemHover.forEach((itm, index) => {
                const mouseOverHandler = () => {
                    setHoveredIndex(index);
                    revealText(itm);
                };


                itm.addEventListener('mouseover', mouseOverHandler);
                itm.addEventListener('mouseout', () => {
                    gsap.to(itm.querySelector('.circle'), {
                        opacity: 0,
                        duration: 0.5
                    });
                });

                // Cleanup function to remove event listeners
                return () => {
                    itm.removeEventListener('mouseover', mouseOverHandler);
                };
            });
        }
    }, [isAllowed, hoveredIndex]);


    return (
        <div className='AllPages'>
            <ScrollToTop />
            <Header />
            <div className="content">
                <div className="landingText">
                    <div className="big">
                        ALL WORKS
                    </div>
                    <div className="paragraph">
                        MR©S
                        specializes in crafting singular brand identities
                        for clients across industries and around the world.
                    </div>
                </div>

                <div className="imageCon">
                    <div className="imageContainer">
                        <div className="imageItem" onClick={() => {alert("coming soon")}}>
                            <img src={mingleImg} alt="" />
                            <div className="circle">
                                <Marquee speed={100} autoFill>
                                    <div className="item">
                                        <img src={mingleImg} alt="" />
                                    </div>
                                </Marquee>
                            </div>
                        </div>
                        <div className="imageItem" onClick={() => {window.open('https://cafeeunoia.onrender.com/', '_blank')}}>
                            <img src={projectOne} alt="" />
                            <div className="circle">
                                <Marquee speed={100} autoFill>
                                    <div className="item">
                                        <img src={projectOne} alt="" />
                                    </div>
                                </Marquee>
                            </div>
                        </div>
                        <div className="imageItem" onClick={() => {window.open('https://ulctelesales.com', '_blank')}}>

                            <img src={projectTwo} alt="" />
                            <div className="circle">
                                <Marquee speed={100} autoFill>
                                    <div className="item">
                                        <img src={projectTwo} alt="" />
                                    </div>
                                </Marquee>
                            </div>
                        </div>
                             <div className="imageItem" onClick={() => {window.open('https://devancinema.onrender.com/', '_blank')}}>

                            <img src={projectFour} alt="" />
                            <div className="circle">
                                <Marquee speed={100} autoFill>
                                    <div className="item">
                                        <img src={projectFour} alt="" />
                                    </div>
                                </Marquee>
                            </div>
                        </div>
                             <div className="imageItem" onClick={() => {window.open('https://melchoraclient.onrender.com/', '_blank')}}>

                            <img src={projectFive} alt="" />
                            <div className="circle">
                                <Marquee speed={100} autoFill>
                                    <div className="item">
                                        <img src={projectFive} alt="" />
                                    </div>
                                </Marquee>
                            </div>
                        </div>
                             <div className="imageItem" onClick={() => {window.open('https://marcusxro.github.io/', '_blank')}}>

                            <img src={projectSix} alt="" />
                            <div className="circle">
                                <Marquee speed={100} autoFill>
                                    <div className="item">
                                        <img src={projectSix} alt="" />
                                    </div>
                                </Marquee>
                            </div>
                        </div>
                             <div className="imageItem" onClick={() => {window.open('https://pcupit.onrender.com/', '_blank')}}>

                            <img src={projectSeven} alt="" />

                            <div className="circle">
                                <Marquee speed={100} autoFill>
                                    <div className="item">
                                        <img src={projectSeven} alt="" />
                                    </div>
                                </Marquee>
                            </div>
                        </div>
                             <div className="imageItem" onClick={() => {window.open('https://forcast-dev.netlify.app/', '_blank')}}>

                            <img src={projectTen} alt="" />
                            <div className="circle">
                                <Marquee speed={100} autoFill>
                                    <div className="item">
                                        <img src={projectTen} alt="" />
                                    </div>
                                </Marquee>
                            </div>
                        </div>
                             <div className="imageItem" onClick={() => {window.open('https://chaatai.netlify.app/', '_blank')}}>

                            <img src={projectNine} alt="" />
                            <div className="circle">
                                <Marquee speed={100} autoFill>
                                    <div className="item">
                                        <img src={projectNine} alt="" />
                                    </div>
                                </Marquee>
                            </div>
                        </div>
                        <div className="imageItem" onClick={() => {alert("coming soon")}}>                            <img src={projectEigth} alt="" />
                            <div className="circle">
                                <Marquee speed={100} autoFill>
                                    <div className="item">
                                        <img src={projectEigth} alt="" />
                                    </div>
                                </Marquee>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default AllPages
