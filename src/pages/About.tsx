import React, { useEffect, useRef, useState } from 'react'
import { ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'
import Marquee from "react-fast-marquee";
import meImage from '../mockups/me.jpg'
import me2 from '../mockups/me/photo1713682323.jpeg'

import cafeImg from '../mockups/cafe.png'
import Header from '../comp/Header';
import Footer from '../comp/Footer';
import { useLocation } from 'react-router-dom';
import ScrollToTop from '../comp/ScrollToTop';
import SplitType from 'split-type'


const About: React.FC = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);



    useEffect(() => {
        document.title = "ABOUT - MR©S"
    }, [])

    const [isAllowed, setIsALlowed] = useState<boolean>(false)


    useEffect(() => {
        const wordStagg: NodeListOf<HTMLDivElement> = document.querySelectorAll('.About .Landing .textCon .textItem .word')

        gsap.to(wordStagg, {
            opacity: 1,
            stagger: 0.3,
            duration: 0,
            delay: 0.5,
            onComplete: () => {
                setInterval(() => { setIsALlowed(true) }, 1000)
                gsap.to(['.imageCon', 'header', '.headerText', '.services',
                    '.textCenterCon', '.beliefs', '.certif', '.est', '.footer'], {
                    opacity: 1,
                    delay: 1
                })

            }
        })

        return () => {
            gsap.to(wordStagg, {
                opacity: 1,
                stagger: 0.3,
                duration: 0,
                delay: 0.5,
                onComplete: () => {
                    setInterval(() => { setIsALlowed(true) }, 1000)
                    gsap.to(['.imageCon', 'header', '.headerText', '.services',
                        '.textCenterCon', '.beliefs', '.certif', '.est', '.footer'], {
                        opacity: 1,
                        delay: 1
                    })

                }
            })

        }

    }, [])


    useEffect(() => {

        if (isAllowed) {
            new SplitType('.About .outerCon .headerText', { types: 'words,chars' })
            new SplitType('.About .outerCon .textCenterCon .textItem', { types: 'words,chars' })
            new SplitType('.About .outerCon .services .container .flexCon .listItem .item', { types: 'words' })
            new SplitType('.About .outerCon .services .headerTitle .headerText', { types: 'words' })
            new SplitType('.About .outerCon .services .textCon .item', { types: 'words,chars' })
            new SplitType('.About .outerCon .beliefs .headerTitle .headerText', { types: 'words' })
            new SplitType('.About .outerCon .beliefs .txts', { types: 'words,chars' })
            new SplitType('.About .outerCon .beliefs .txtss', { types: 'words,chars' })
            new SplitType('.About .outerCon .certif .list', { types: 'words' })
            new SplitType('.About .outerCon .certif .textCon .item', { types: 'words,chars' })
            new SplitType('.About .outerCon .est', { types: 'words,chars' })
            

            gsap.registerPlugin(ScrollTrigger)
            gsap.to('.About .outerCon .headerText .word .char', {
                y: 0,
                stagger: 0.01,
                scrollTrigger: {
                    trigger: '.headerText',
                    start: 'top 80%',
                    end: 'bottom',
                }
            })

            gsap.to('.About .outerCon .textCenterCon .textItem .word .char', {
                y: 0,
                stagger: 0.01,
                scrollTrigger: {
                    trigger: '.About .outerCon .textCenterCon  .textItem',
                    start: 'top 80%',
                    end: 'bottom',
                }
            })

            gsap.to('.About .outerCon .services .container .flexCon .listItem .item .word ', {
                y: 0,
                stagger: 0.02,
                scrollTrigger: {
                    trigger: '.About .outerCon .services .container .flexCon',
                    start: 'top 80%',
                    end: 'bottom',
                }
            })

            gsap.to('.About .outerCon .services .headerTitle .headerText .word ', {
                y: 0,
                stagger: 0.1,
                scrollTrigger: {
                    trigger: '.About .outerCon .services .headerTitle ',
                    start: 'top 80%',
                    end: 'bottom',
                }
            })



            gsap.to('.About .outerCon .services .textCon .item .word .char', {
                y: 0,
                stagger: 0.01,
                scrollTrigger: {
                    trigger: '.About .outerCon .services .textCon .item',
                    start: 'top 80%',
                    end: 'bottom',
                }
            })




            gsap.to('.About .outerCon .beliefs .headerTitle .headerText .word', {
                y: 0,
                stagger: 0.01,
                scrollTrigger: {
                    trigger: '.About .outerCon .beliefs .headerTitle',
                    start: 'top 80%',
                    end: 'bottom',
                }
            })

            gsap.to('.About .outerCon .beliefs .txts .word .char ', {
                y: 0,
                stagger: 0.01,
                scrollTrigger: {
                    trigger: '.About .outerCon .beliefs .textCons',
                    start: 'top 80%',
                    end: 'bottom',
                }
            })

            gsap.to('.About .outerCon .beliefs .txtss .word .char ', {
                y: 0,
                stagger: 0.01,
                scrollTrigger: {
                    trigger: '.About .outerCon .beliefs .textCons',
                    start: 'top 80%',
                    end: 'bottom',
                }
            })


            gsap.to('.About .outerCon .beliefs .imgCon img', {
                maxHeight: '100%',
                duration: 1,
                delay: 0.2,
                scrollTrigger: {
                    trigger: '.About .outerCon .beliefs .imgCon img',
                    start: 'top 80%',
                    end: 'bottom',
                }
            })


            gsap.to('.About .outerCon .certif .headerTitle .headerText .word', {
                y: 0,
                scrollTrigger: {
                    trigger: '.About .outerCon .certif .headerTitle .headerText',
                    start: 'top 80%',
                    end: 'bottom',
                }
            })

            gsap.to('.About .outerCon .certif  .techs .list .word ', {
                y: 0,
                stagger: 0.02,
                scrollTrigger: {
                    trigger: '.About .outerCon .certif .techs',
                    start: 'top 80%',
                    end: 'bottom',
                }
            })


            gsap.to('.About .outerCon .certif .textCon .item .word .char', {
                y: 0,
                stagger: 0.02,
                scrollTrigger: {
                    trigger: '.About .outerCon .certif .textCon .item .word ',
                    start: 'top 80%',
                    end: 'bottom',
                }
            })

            

            gsap.to('.About .outerCon .est .word .char', {
                y: 0,
                stagger: 0.05,
                scrollTrigger: {
                    trigger: '  .About .outerCon .est .word',
                    start: 'top 80%',
                    end: 'bottom',
                }
            })


        }
    }, [isAllowed])
    return (
        <>
            <div className='About'>

                <Header />
                <ScrollToTop />
                <div className="content outerCon">
                    <div className="Landing">
                        <div className="textCon">
                            <div className="textItem"><div className="word">BORN</div> <div className="word">IN</div></div>
                            <div className="textItem"><div className="word">DIGITAL</div></div>
                        </div>
                    </div>
                    <div className="imageCon">
                        <div className="img">
                            <img src={meImage} alt="" />
                        </div>
                        <div className="img">
                            <img src={me2} alt="" />
                        </div>
                    </div>
                    <div className="headerText">
                        HELLO, IM MARCUS SALOPASO. AN INDEPENDENT DIGITAL-FIRST DEVELOPER, COMBINING BRANDING,
                        MOTION DESIGN & DIGITAL DESIGN TO HELP AMAZING CLIENTS STAND OUT FROM
                        THE CROWD IN A DIGITAL FIRST WORLD.
                    </div>
                    <div className="textCenterCon">
                        <div className="textItem">
                            I believe that for a brand to break through the barrier
                            of today's digital world, it needs to be a memorable experience
                            across all platforms.
                        </div>
                        <div className="textItem">
                            My philosophy is that working closely
                            with my clients and following a fun and
                            engaging process filled with great workshops
                            and conversations gives the best result.
                        </div>
                        <div className="textItem">
                            With more than 2 years of experience – I have worked
                            with various small and big clients,
                            creating an amazing digital experiences.
                        </div>
                    </div>
                    <div className="services">
                        <div className="headerTitle">
                            <div className="headerText">
                                MY SERVICES
                            </div>
                        </div>
                        <div className="container">
                            <div className="flexCon">
                                <div className="title">BRANDING</div>
                                <div className="listItem">
                                    <div className="item">UI/UX Design</div>
                                    <div className="item">Visual Identity</div>
                                    <div className="item">Logo Design </div>
                                    <div className="item">Motion Design </div>
                                    <div className="item">3D Design </div>
                                </div>
                            </div>
                            <div className="flexCon">
                                <div className="title">DIGITAL</div>
                                <div className="listItem">
                                    <div className="item">Web Design</div>
                                    <div className="item">Web Development</div>
                                    <div className="item"> User Experience</div>
                                    <div className="item">Wireframing &
                                        Prototyping</div>
                                </div>
                            </div>
                        </div>
                        <div className="textCon">
                            <div className="item">
                                If everything your brand is looking for isn't on the list, then don't worry.
                            </div>
                            <div className="item">
                                I collaborate with great people to cover all aspects of your project.
                            </div>
                        </div>
                    </div>

                    <div className="beliefs">
                        <div className="headerTitle">
                            <div className="headerText">
                                MY BELIEFS
                            </div>
                        </div>
                        <div className="container">
                            <div className="textCons">
                                <div className="contentTitle">
                                    DESIGN IS AN EXPERIENCE
                                </div>
                                <div className="contentOne txts">
                                    Design is not just colors, fonts and motion
                                    - It's about understanding your users needs
                                    and what gets their clock ticking.
                                    Truly understanding what takes design from just being design
                                    to creating a complete brand experience is what makes your
                                    business stand out from all the noise created in a digital
                                    doom-scroll era.
                                </div>
                                <div className="contentTwo txts">
                                    I'm created for one purpose –
                                    to help brands evolve into being experiences across all touchpoints.
                                </div>
                            </div>
                            <div className="textCons">
                                <div className="contentTitle">
                                    FUN AND ENGAGING PROCESS
                                </div>
                                <div className="contentOne txtss">
                                    When you start a new project with me,
                                    I always want to learn as much about your business,
                                    your vision and your dreams as we possible can.
                                    I do this the best by having different workshops
                                    tailored for your needs - where we together dive
                                    deep into the world of design. This way I make sure
                                    that we hit exactly what you're looking for.
                                </div>
                            </div>
                        </div>
                        <div className="imgCon uniqueImgCon">
                            <img src={cafeImg} alt="" />
                        </div>
                    </div>
                    <div className="certif">
                        <div className="headerTitle">
                            <div className="headerText">
                                TECHNOLOGIES
                            </div>
                        </div>
                        <div className="container">
                            <div className="techs">
                                <div className="title">
                                    FRONT-END
                                </div>
                                <div className="list">
                                    <div className="item">React Js (2yrs)</div>
                                    <div className="item">Javscript (3yrs)</div>
                                    <div className="item">Typescript (5mnths)</div>
                                    <div className="item">Tailwind(5mnths)</div>
                                    <div className="item">Gsap(3yrs)</div>
                                    <div className="item">CSS</div>
                                    <div className="item">HTML(3yrs)</div>
                                </div>
                            </div>
                            <div className="techs">
                                <div className="title">
                                    BACK-END
                                </div>
                                <div className="list">
                                    <div className="item">Express(2yrs)</div>
                                    <div className="item">Node Js(2yrs)</div>
                                    <div className="item">Firebase(2yrs)</div>
                                    <div className="item">MongoDB(2yrs)</div>
                                </div>
                            </div>
                            <div className="techs">
                                <div className="title">
                                    OTHER
                                </div>
                                <div className="list">
                                    <div className="item">Java(1yr)</div>
                                    <div className="item">VB.net(1yr)<div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="textCon">
                            <div className="item">
                                Here's the list of my technologies that i used recently on my projects
                            </div>
                        </div>
                    </div>
                    <div className="est">
                        DEV.2024
                    </div>
                </div>
            </div>

            <div className="filler"></div>

            <div className="footers">
                <div className="upwork">
                    <div className="headerTitle">UPWORK</div>
                    <div className="text">Salopaso M.</div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default About
