import React, { useEffect, useRef, useState } from 'react'
import { ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'
import Marquee from "react-fast-marquee";
import meImage from '../mockups/me.jpg'
import me2 from '../mockups/me/photo1713682323.jpeg'

import Header from '../comp/Header';

const About: React.FC = () => {

    const imageRef = useRef<HTMLDivElement>(null)



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
        <div className='About'>
            <Header />
            <div className="content">

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
            </div>



        </div>
    )
}

export default About
