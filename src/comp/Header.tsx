import React, { useEffect, useState } from 'react'
import moment from 'moment-timezone';
import { useNavigate } from 'react-router-dom';


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

    return (
        <header>
            <div className="logo">
                MR©S
            </div>
            <div className="midCon">
                <div className="item" onClick={() => { nav('/') }}>Work(5)</div>
                <div className="item" 
                onClick={() => {
                    nav('/about');
                    window.scrollTo(0,0)

                }}>About</div>
            </div>
            <div className="time">
                {phTime} PH
            </div>
        </header>
    )
}

export default Header
