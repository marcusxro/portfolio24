import React, { useEffect, useState } from 'react'
import moment from 'moment-timezone';


const Header: React.FC = () => {
    const [phTime, setPhTime] = useState<string>("")

    useEffect(() => {
        const getPhTime = () => {
            const now = moment().tz('Asia/Manila')
            setPhTime(now.format("HH.mm"))
        }

        getPhTime()
        const intervalSec = setInterval(getPhTime, 60000);
        return () => {clearInterval(intervalSec)}
    }, [])
  return (
    <header>
        <div className="logo">
        MR©S
        </div>

        <div className="time">
            {phTime} GMT+8
        </div>
    </header>
  )
}

export default Header
