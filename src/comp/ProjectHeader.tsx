import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';

const ProjectHeader: React.FC = () => {
    const nav = useNavigate()


    useEffect(() => {
        const hoverITEM: NodeListOf<HTMLDivElement> = document.querySelectorAll('.slctd .header .hoverITEM')

        hoverITEM.forEach((itm) => {

            const resetYAsix = () => {
                gsap.to(itm.querySelectorAll('span'), {
                    y: 0,
                    ease: 'bounce'
                })
            }

            const goYAsix = () => {
                gsap.to(itm.querySelectorAll('span'), {
                    y: '-2.2rem',
                    ease: 'bounce'
                })
            }


            itm.addEventListener("mouseover", () => {
                resetYAsix()
            })

            itm.addEventListener("mouseleave", () => {
                goYAsix()
            })

            return () => {

                itm.addEventListener("mouseover", () => {
                    resetYAsix()
                })

                itm.addEventListener("mouseleave", () => {
                    goYAsix()
                })
            }
        })

    }, [])


    return (
        <div className="header">
            <div className="logo hoverITEM">
                <span>
                    MR©S
                </span>
                <span>
                    MR©S
                </span>
            </div>
            <div className="close hoverITEM" onClick={() => { nav('/'); window.scrollTo(0, 0); }}>
                <span>CLOSE</span>
                <span>CLOSE</span>
            </div>
        </div>
    )
}

export default ProjectHeader
