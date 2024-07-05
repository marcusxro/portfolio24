import React, { useEffect, useState } from 'react'
import moment from 'moment-timezone';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';

const Header: React.FC = () => {
    const [phTime, setPhTime] = useState<string>("")

    useEffect(() => {
        const getPhTime = () => {
            const now = moment().tz('Asia/Manila')
            setPhTime(now.format("HH.mm"))
        }

        getPhTime()
        const intervalSec = setInterval(getPhTime, 60000);
        return () => { clearInterval(intervalSec) }
    }, [])
    const nav = useNavigate()

    useEffect(() => {
        const hoverEl = document.querySelectorAll('header .midCon .item')

        hoverEl.forEach((itm) => {
            itm.addEventListener("mouseover", () => {
                gsap.to(itm.querySelectorAll('span'), {
                    duration: 0.5,
                    y: '0px',
                    ease: 'bounce',
                    yoyo: true
                });
            })
            itm.addEventListener("mouseleave", () => {
                gsap.to(itm.querySelectorAll('span'), {
                    duration: 0.5,
                    y: '-1.1rem',
                    ease: 'bounce',
                    yoyo: true
                });
            })
            return () => {
                itm.removeEventListener("mouseover", () => {
                    gsap.to(itm.querySelectorAll('span'), {
                        duration: 0.5,
                        y: '0px',
                        ease: 'bounce',
                        yoyo: true
                    });
                })
                itm.removeEventListener("mouseleave", () => {
                    gsap.to(itm.querySelectorAll('span'), {
                        duration: 0.5,
                        y: '-1.1rem',
                        ease: 'bounce',
                        yoyo: true
                    });
                })
            }
        })

    }, [])

    return (
        <header>
            <div className="logo">
                MR©S
            </div>
            <div className="midCon">
                <div className="item" onClick={() => { nav('/') }}>
                    <span>Works(5)</span>
                    <span>Works(5)</span>
                </div>
                <div className="item" onClick={() => { nav('/about'); }}>
                    <span>About</span>
                    <span>About</span>
                </div>
                <div className="item" onClick={() => { nav('/Contact'); }}>
                    <span>Contact</span>
                    <span>Contact</span>
                </div>
            </div>
            <div className="time">
                {phTime} PH
            </div>
        </header>
    )
}

export default Header
