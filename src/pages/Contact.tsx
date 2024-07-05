import React, { useEffect } from 'react'
import Header from '../comp/Header'
import gsap from 'gsap'
import Marquee from 'react-fast-marquee'
import Footer from '../comp/Footer'


const Contact: React.FC = () => {
    useEffect(() => {
        document.title = "CONTACT - MR©S"

    gsap.to('header', {
        opacity: 1,
    })
    }, [])

    return (
        <>
        <div className='ContactPage'>
            <Header />sd
            <div className="ContentContact">
                <div className="marq">
                    <Marquee speed={200} autoFill>
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
        <Footer />
        </div>
        </>
    )
}

export default Contact
