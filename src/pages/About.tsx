import React, { useEffect, useRef, useState } from 'react'
import { ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'
import Marquee from "react-fast-marquee";
import meImage from '../mockups/me.jpg'
import me2 from '../mockups/me/photo1713682323.jpeg'

import cafeImg from '../mockups/cafe.png'
import Header from '../comp/Header';
import Footer from '../comp/Footer';
import { useLocation, useNavigate } from 'react-router-dom';

const About: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);



    const [percScroll, setPercScroll] = useState<number>(0)

    useEffect(() => {

        document.title = "ABOUT - MR©S"
        const updateScrollPercentage = () => {
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollTop = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
            const percentage = (scrollTop / scrollHeight) * 100;
            setPercScroll(percentage);
        };

        window.addEventListener('scroll', updateScrollPercentage);

        return () => {
            window.removeEventListener('scroll', updateScrollPercentage);
        };
    }, [])


    useEffect(() => {
        gsap.to('header', {
            opacity: 1
        })
    }, [])


    return (
        <>
            <div className='About'>
                <Header />
                <div className="content outerCon">
                    <div className="Landing">
                        <div className="textCon">
                            <div className="textItem">BORN IN</div>
                            <div className="textItem">DIGITAL</div>
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
                            MY SERVICES
                        </div>
                        <div className="container">
                            <div className="flexCon">
                                <div className="title">BRANDING</div>
                                <div className="listItem">
                                    <div className="item">Visual Identity </div>
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
                            MY BELIEFS
                        </div>
                        <div className="container">
                            <div className="textCons">
                                <div className="contentTitle">
                                    DESIGN IS AN EXPERIENCE
                                </div>
                                <div className="contentOne">
                                    Design is not just colors, fonts and motion
                                    - It's about understanding your users needs
                                    and what gets their clock ticking.
                                    Truly understanding what takes design from just being design
                                    to creating a complete brand experience is what makes your
                                    business stand out from all the noise created in a digital
                                    doom-scroll era.
                                </div>
                                <div className="contentTwo">
                                    I'm created for one purpose –
                                    to help brands evolve into being experiences across all touchpoints.
                                </div>
                            </div>
                            <div className="textCons">
                                <div className="contentTitle">
                                    FUN AND ENGAGING PROCESS
                                </div>
                                <div className="contentOne">
                                    When you start a new project with us,
                                    we always want to learn as much about your business,
                                    your vision and your dreams as we possible can.
                                    We do this the best by having different workshops
                                    tailored for your needs - where we together dive
                                    deep into the world of design. This way we make sure
                                    that we hit exactly what you're looking for.
                                </div>
                            </div>
                        </div>
                        <div className="imgCon">
                            <img src={cafeImg} alt="" />
                        </div>
                    </div>
                    <div className="certif">
                        <div className="headerTitle">
                            TECHNOLOGIES
                        </div>
                        <div className="container">
                            <div className="techs">
                                <div className="title">
                                    FRONT-END
                                </div>
                                <div className="list">
                                    <div className="item">React Js (with certificate)</div>
                                    <div className="item">Javscript (with certificate)</div>
                                    <div className="item">Typescript</div>
                                    <div className="item">Tailwind</div>
                                    <div className="Item">Gsap</div>
                                    <div className="item">CSS (with certificate)</div>
                                    <div className="item">HTML (with certificate)</div>
                                </div>
                            </div>
                            <div className="techs">
                                <div className="title">
                                    BACK-END
                                </div>
                                <div className="list">
                                    <div className="item">Express</div>
                                    <div className="item">Node Js</div>
                                    <div className="item">Firebase</div>
                                    <div className="item">MongoDB</div>
                                </div>
                            </div>
                            <div className="techs">
                                <div className="title">
                                    OTHER
                                </div>
                                <div className="list">
                                    <div className="item">Java</div>
                                    <div className="item">VB.net<div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="textCon">
                            Here's the list of my technologies that i used recently on my projects
                        </div>
                    </div>
                    <div className="est">
                        EST.2024
                    </div>
                </div>
            </div>

            <div className="filler"></div>

            <div className="footers">
                <Footer />
            </div>
        </>
    )
}

export default About
