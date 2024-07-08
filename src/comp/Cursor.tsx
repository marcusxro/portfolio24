import React, { useEffect, useState } from 'react'
import gsap from 'gsap'
import Marquee from 'react-fast-marquee';

const Cursor: React.FC = () => {

    useEffect(() => {

        const onMouseMove = (e: MouseEvent) => {
            gsap.to('.cursor', {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1,
                ease: 'power1.out',
            });
        };

        document.addEventListener('mousemove', onMouseMove);

        return () => {
            document.removeEventListener('mousemove', onMouseMove);
        };
    }, []);


    const [hoverWork, setHoverWork] = useState<boolean>(false)

    useEffect(() => {
        const itemHover: NodeListOf<HTMLImageElement> = document.querySelectorAll('.selectedWorks .contentWorkItem');

        itemHover.forEach((itm) => {


            const goDown = () => {
                gsap.to('.cursor', {
                    scale: 2.5,
                    ease: 'bounce'
                })
                setHoverWork(true)
            }

            const goUp = () => {
                gsap.to('.cursor', {
                    scale: '1',
                    ease: 'bounce'
                })
                setHoverWork(false)
            }

            itm.addEventListener("mouseover", goDown)
            itm.addEventListener("mouseleave", goUp)

            return () => {

                itm.addEventListener("mouseover", goDown)
                itm.addEventListener("mouseleave", goUp)
            }

        })

    }, [])


    return (
        <div className="cursor">
            {hoverWork ?
                <Marquee autoFill speed={30}>
                    <div className="itme">VIEW WORK-</div>
                </Marquee>
                : ''}
        </div>
    )
}

export default Cursor
