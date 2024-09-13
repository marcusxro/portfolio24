import React, { useEffect } from 'react'
import Header from '../comp/Header'
import gsap from 'gsap'
import Marquee from 'react-fast-marquee'
import SplitType from 'split-type'


const NotFound: React.FC = () => {

  useEffect(() => {
  
    new SplitType('.notFoundHeader', { types: 'words,chars' })

    gsap.to('.notFoundHeader .word .char', {
      opacity: 1,
      stagger: 0.3,
      duration: 0,
      delay: 1,
      onComplete: () => {
             
        gsap.to('.NotFoundMarqs', {
          opacity: 1,
          delay: 1
        })
        gsap.to('header', {
          opacity: 1,
          delay: 1
        })
      }
    })

  }, [])

  return (
    <div className='NotFoundPage'>
      <Header />
      <div className="NotFoundContent">
        <Marquee className='NotFoundMarqs' autoFill direction='right'>
          <div className='notFoundDesc'>NOT FOUND - </div>
        </Marquee>
        <div className="notFoundHeader">404</div>
        <div className="notFoundCon">
          <Marquee className='NotFoundMarqs' autoFill>
            <div className='notFoundDesc'>NOT FOUND - </div>
          </Marquee>
        </div>
      </div>
    </div>
  )
}

export default NotFound
