import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import gsap from 'gsap'

interface linkStrings {
    visitProject: string,
    nextProject: string
}


const Navigator: React.FC<linkStrings> = ({ visitProject, nextProject }) => {

    const nav = useNavigate()

    const nextBtn = () => {
        gsap.to([`.header`, '.imageItem',
            '.slctd .content .right .content .title',
            '.slctd .content .right .content .innerCon',
            '.slctd .content .right .navigation .item',
            '.slctd .content .right .content .title'], {
            opacity: 0,
            duration: 0,
            onComplete: () => {
                nav(`/selectedwork/${nextProject}`);
                window.scrollTo(0, 0)
            }
        })
    }



    const navigateToOtherPage = () => {

        if(!visitProject.includes('.')) {
            alert(visitProject)
        } else {
            window.open(visitProject, '_blank')
        }


    }



    useEffect(() => {
        const navigatorHover: NodeListOf<HTMLDivElement> = document.querySelectorAll('.slctd .content .navigation .item')

        navigatorHover.forEach((itm) => {

            const resetYAxis = () => {
                gsap.to(itm.querySelectorAll('span'), {
                    y: 0,
                    ease: 'bounce'
                })
            }
            const goYAsix = () => {
                gsap.to(itm.querySelectorAll('span'), {
                    y: '-1.5rem',
                    ease: 'bounce'
                })
            }


            itm.addEventListener("mouseover", resetYAxis)
            itm.addEventListener("mouseleave", goYAsix)

            return () => {
                itm.addEventListener("mouseover", resetYAxis)
                itm.addEventListener("mouseleave", goYAsix)
            }
        })

    }, [])

    return (
        <div className="navigation">

            <div className="item" onClick={() => { navigateToOtherPage() }}>
                <span>VISIT</span>
                <span>VISIT</span>
            </div>

            <div className="item" onClick={() => { nextBtn() }}>
                <span>NEXT +</span>
                <span>NEXT</span>
            </div>
        </div>
    )
}

export default Navigator
