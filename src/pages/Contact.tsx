import React, { useEffect, useRef, useState } from 'react'
import Header from '../comp/Header'
import gsap from 'gsap'
import Marquee from 'react-fast-marquee'
import Footer from '../comp/Footer'
import ScrollToTop from '../comp/ScrollToTop'


const Contact: React.FC = () => {
    const hagoo = useRef(null)
    const [speedScroll, setSpeed] = useState<number>(0)


    useEffect(() => {
        document.title = "CONTACT - MR©S"
        window.scrollTo(0, 0)


        gsap.to('.ContactPage .ContentContact .marq', {
            opacity: 1,
            delay: 1,
            duration: 0,
            onComplete: () => {

                gsap.to(['header','.footer', '.footerContact'], {
                    opacity: 1,
                    delay: 1
                })

                setTimeout(() => {
                    setSpeed(300)
                }, 1000);
            }
        })


    }, [hagoo])

    return (
        <>
            <div className='ContactPage'>
            <Header />
                <ScrollToTop />
                <div className="ContentContact">
                    <div className="marq">
                        <Marquee ref={hagoo} speed={speedScroll} autoFill>
                            <div className="item">
                                SAY HELLO
                            </div>
                            <div className="item">
                                SAY こんにちは
                            </div>
                            <div className="item">
                                SAY BONJOUR
                            </div>
                            <div className="item">
                                SAY CIAO
                            </div>
                            <div className="item">
                                SAY HOLA
                            </div>
                        </Marquee>
                    </div>
                    <div className="footerContact">
                        <div className="header">
                            I'm always looking for amazing clients to work with – drop me a mail and you will hear from me as soon as possible.
                        </div>
                        <div className="flexCon">
                            <div className="item">
                                <div className="headerTitle">
                                    BUSINESS INQUIRIES
                                </div>
                                <div className="text">
                                    salopasomarcusbanaga@gmail.com
                                </div>
                            </div>
                            <div className="item">
                                <div className="headerTitle">
                                    GENERAL
                                </div>
                                <div className="text">
                                    marcussalopaso1@gmail.com
                                </div>
                            </div>
                            <div className="item">
                                <div className="headerTitle">
                                    BUSINESS INQUIRIES
                                </div>
                                <div className="text">
                                    (+63) 905 701 430
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="filler">
            </div>

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

export default Contact
