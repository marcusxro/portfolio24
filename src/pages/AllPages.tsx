import React, { useEffect } from 'react'
import Header from '../comp/Header'
import gsap from 'gsap'

import projectOne from '../mockups/cafe.png'
import projectTwo from '../mockups/ulcImg.jpg'
import projectThree from '../mockups/creativeDev.jpg'
import projectFour from '../mockups/devanImg.jpg'
import projectFive from '../mockups/melchoraScanner.jpg'
import projectSix from '../mockups/oldPort.jpg'
import projectSeven from '../mockups/pcupIt.jpg'
import projectEigth from '../mockups/ulcImg.jpg'
import projectNine from '../mockups/branding.jpg'
import projectTen from '../mockups/orderingAPp.jpg'

const AllPages: React.FC = () => {

    useEffect(() => {
        gsap.to('header', {
            opacity: 1
        })
    }, [])
    useEffect(() => {

        const itemHover: NodeListOf<Element> =
            document.querySelectorAll('.AllPages .content .imageCon .imageContainer .imageItem ');

        itemHover.forEach((itm) => {

            const revealText = () => {
                gsap.to(itm.querySelector('.circle'), {
                    width: 'auto',
                    height: '3.5rem',
                    borderRadius: '2rem',
                    ease: 'bounce'
                })
                gsap.to(itm.querySelector('.title'), {
                    opacity: 1,
                    delay: 0.6
                })
                gsap.to(itm.querySelector('.roles'), {
                    opacity: 1,
                    delay: 0.6
                })
            }
            const hideText = () => {
                gsap.to(itm.querySelector('.circle'), {
                    width: '3.5rem',
                    height: '3.5rem',
                    borderRadius: '50%',
                    ease: 'bounce'
                })
                gsap.to(itm.querySelector('.title'), {
                    opacity: 0,
                    duration: 0,
                    ease: 'none'
                })
                gsap.to(itm.querySelector('.roles'), {
                    opacity: 0,
                    duration: 0,
                            ease: 'none'
                })
            }


            itm.addEventListener("mouseover", () => {
                revealText()
            })

            itm.addEventListener("mouseleave", () => {
                hideText()
            })

            return () => {
                itm.removeEventListener("mouseover", () => {
                    revealText()
                })

                itm.removeEventListener("mouseleave", () => {
                    hideText()
                })
            }
        })


    }, [])



    return (
        <div className='AllPages'>
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
                        <div className="imageItem">
                            <img src={projectOne} alt="" />
                            <div className="circle">
                                <div className="title">Cafe Eunoia</div>
                                <div className="roles">Designer & Developer</div>
                            </div>
                        </div>
                        <div className="imageItem">
                            <img src={projectTwo} alt="" />
                            <div className="circle">
                                <div className="title">Cafe Eunoia</div>
                                <div className="roles">Designer & Developer</div>
                            </div>
                        </div>
                        <div className="imageItem">
                            <img src={projectThree} alt="" />
                            <div className="circle">
                                <div className="title">Cafe Eunoia</div>
                                <div className="roles">Designer & Developer</div>
                            </div>
                        </div>
                        <div className="imageItem">
                            <img src={projectFour} alt="" />
                            <div className="circle">
                                <div className="title">Cafe Eunoia</div>
                                <div className="roles">Designer & Developer</div>
                            </div>
                        </div>
                        <div className="imageItem">
                            <img src={projectFive} alt="" />
                            <div className="circle">
                                <div className="title">Cafe Eunoia</div>
                                <div className="roles">Designer & Developer</div>
                            </div>
                        </div>
                        <div className="imageItem">
                            <img src={projectSix} alt="" />
                            <div className="circle">
                                <div className="title">Cafe Eunoia</div>
                                <div className="roles">Designer & Developer</div>
                            </div>
                        </div>
                        <div className="imageItem">
                            <img src={projectSeven} alt="" />

                            <div className="circle">
                                <div className="title">Cafe Eunoia</div>
                                <div className="roles">Designer & Developer</div>
                            </div>
                        </div>
                        <div className="imageItem">
                            <img src={projectEigth} alt="" />
                            <div className="circle">
                                <div className="title">Cafe Eunoia</div>
                                <div className="roles">Designer & Developer</div>
                            </div>
                        </div>
                        <div className="imageItem">
                            <img src={projectNine} alt="" />
                            <div className="circle">
                                <div className="title">Cafe Eunoia</div>
                                <div className="roles">Designer & Developer</div>
                            </div>
                        </div>
                        <div className="imageItem">
                            <img src={projectTen} alt="" />
                            <div className="circle">
                                <div className="title">Cafe Eunoia</div>
                                <div className="roles">Designer & Developer</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllPages
