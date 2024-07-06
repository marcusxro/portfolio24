import React, { useEffect, useRef, useState } from 'react'
import musicSrc from '../music/MusicSrc.mp3'

const MusicPlayer = () => {
    const audioRef = useRef<HTMLAudioElement>(null)
    const [isPlaying, setIsplaying] = useState<boolean>(false)


    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.loop = true;
            if (isPlaying) {
              audioRef.current.play();
            } else {
              audioRef.current.pause();
            }
          }
    }, [isPlaying])

    const togglePlayPause = () => {
        setIsplaying(!isPlaying);
    };

    return (
        <div className="perc musicPlayerDiv">
            <audio loop src={musicSrc} ref={audioRef} />
            <div className="percentage" onClick={togglePlayPause}>
                MUSIC <span>{isPlaying ? 'OFF' : "ON"}</span>
            </div>
        </div>
    )
}

export default MusicPlayer
