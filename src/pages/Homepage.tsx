import React, { useCallback, useEffect, useRef, useState } from 'react'
import Header from '../comp/Header'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'

//mockup imgs
import riri from '../mockups/orderingAPp.jpg'
import cafeEunoia from '../mockups/cafe.png'
import ulc from '../mockups/ulcImg.jpg'
import pcup from '../mockups/pcupIt.jpg'
import melchoraIRS from '../mockups/melchoraScanner.jpg'


import { useNavigate } from 'react-router-dom';
import Footer from '../comp/Footer';
import ScrollToTop from '../comp/ScrollToTop';
import SplitType from 'split-type'
import Marquee from 'react-fast-marquee'
import Cursor from '../comp/Cursor'
import GridImgs from '../comp/GridImgs'


const Homepage: React.FC = () => {

  const [percScroll, setPercScroll] = useState<number>(0)

  useEffect(() => {

    document.title = "MR©S"
    const updateScrollPercentage = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollTop = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      const percentage = (scrollTop / scrollHeight) * 100;
      setPercScroll(percentage);
    };

    window.addEventListener('scroll', updateScrollPercentage);

    return () => {
      window.removeEventListener('scroll', updateScrollPercentage);
    };
  }, [])


  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const itemHover: NodeListOf<Element> = document.querySelectorAll('.landing .landingCon .textCon')

    itemHover.forEach((itm) => {
      if (percScroll >= 3) {
        gsap.to(itm.querySelectorAll('span'), 1, {
          translateY: '0vw',
          ease: 'bounce'
        })
      } else {
        gsap.to(itm.querySelectorAll('span'), 1, {
          translateY: '-7vw',
          ease: 'bounce'
        })
      }
    })
  }, [percScroll])


  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const itemHover: NodeListOf<Element> = document.querySelectorAll('.more .textCon');

    itemHover.forEach((itm, index, array) => {
      const duration = index === 0 || index === array.length - 1 ? .5 : 1;
      gsap.to(itm.querySelectorAll('span'), {
        delay: duration - .3,
        translateY: '0vw',
        scrollTrigger: {
          trigger: itm,
          start: 'top 80%',
          end: 'bottom 50%',
          scrub: 1,
        }
      });
    });

    return () => {
      itemHover.forEach((itm, index, array) => {
        const duration = index === 0 || index === array.length - 1 ? .5 : 1;
        gsap.to(itm.querySelectorAll('span'), {
          delay: duration - .3,
          translateY: '0vw',
          scrollTrigger: {
            trigger: itm,
            start: 'top 80%',
            end: 'bottom 50%',
            scrub: 1,
          }
        });
      });
    }
  }, []);


  const [imgArr, setImgArr] = useState<HTMLImageElement[]>([])
  const [completedAnimations, setCompletedAnimations] = useState<string[]>([]); // Track completed animations by image src

  useEffect(() => {
    const itemHover: NodeListOf<HTMLImageElement> = document.querySelectorAll('.selectedWorks .workItem .imageCon .outerImg');

    itemHover.forEach((showImg) => {
      gsap.to(showImg, {
        height: '100%',
        ease: 'bounce',
        onComplete: () => {

          const imgElement = showImg as HTMLImageElement;

          setImgArr((prevImg) => {
            if (!prevImg.some(img => img.src === imgElement.src)) {
              return [...prevImg, imgElement];
            }
            return prevImg;
          });
          setCompletedAnimations((prev) => [...prev, imgElement.src]);
        },
        scrollTrigger: {
          trigger: showImg,
          start: 'top 90%',
          end: 'bottom',
        },
        duration: 0.7,
      });
    });
  }, []);



  useEffect(() => {
    const itemHover: NodeListOf<HTMLImageElement> = document.querySelectorAll('.selectedWorks .workItem');

    itemHover.forEach((itm) => {


      const goDown = () => {
        gsap.to(itm.querySelector('.absoImg'), {
          top: '0%',
          ease: 'bounce'
        })
      }

      const goUp = () => {
        gsap.to(itm.querySelector('.absoImg'), {
          top: '100%',
          ease: 'bounce'
        })
      }

      itm.addEventListener("mouseover", goDown)
      itm.addEventListener("mouseleave", goUp)

      return () => {

        itm.addEventListener("mouseover", goDown)
        itm.addEventListener("mouseleave", goUp)
      }

    })

  }, [])


  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.to('.workItem .date span', {
      y: '-.99999vw',
      ease: 'bounce',
      scrollTrigger: {
        trigger: '.workItem .date',
        start: 'top 80%',
        end: 'bottom',
      }
    })
  }, [])


  const nav = useNavigate()

  useEffect(() => {

    new SplitType('.quote', { types: 'words,chars' })
    new SplitType('.gridItem', { types: 'words' })
    new SplitType('.descContent .secLayer .item', { types: 'words' })

    const itemShow: NodeListOf<Element> = document.querySelectorAll('.landing .landingCon .textCon span .word');
    window.scrollTo(0, 0)
    gsap.to(itemShow, {
      opacity: 1,
      stagger: 0.1,
      duration: 0,
      delay: 0.5,
      onComplete: () => {
        gsap.to('.quote .word .char', {
          y: 0,
          stagger: 0.01,
          duration: 0.5,
          delay: 0.8,
        })
        gsap.to('.descContent .gridItem .word ', {
          y: 0,
          stagger: 0.03,
          duration: 0.5,
          delay: 0.8,
        })
        gsap.to('.descContent .secLayer .item .word', {
          y: 0,
          stagger: 0.1,
          duration: 0.5,
          delay: 0.8,
        })
        gsap.to(['.landing .descContent', '.homepage-kinetic', '.selectedWorks', '.footer', 'header', '.more'], {
          opacity: 1,
          delay: 0.8,
        })
      }
    })
  }, []);

  useEffect(() => {
    const parentDiv = document.querySelector('.lastworkItem .button ')
    const itemHover: NodeListOf<Element> = document.querySelectorAll('.lastworkItem .button .textCon span');

    itemHover.forEach((itm) => {

      const animate = () => {
        gsap.to(itm, {
          y: '0rem',
          ease: 'bounce'
        })
      }
      const RemoveAnimate = () => {
        gsap.to(itm, {
          y: '-2rem',
          ease: 'bounce'
        })
      }

      parentDiv?.addEventListener("mouseover", animate)
      parentDiv?.addEventListener("mouseleave", RemoveAnimate)

      return () => {
        parentDiv?.removeEventListener("mouseover", animate)
        parentDiv?.removeEventListener("mouseleave", RemoveAnimate)
      }

    })

  }, [])

  return (
    <div className='Homepage'>
      <Header />
      <ScrollToTop />

      <div className="content">
        <div className="landing">
          <div className="landingCon">
            <div className="textCon">
              <span>
                <div className="word logoWord">MR©S</div>
                <div className="word">IS</div>
              </span>
              <span>
                <div className="word logoWord">MR©S</div>
                <div className="word">IS</div>
              </span>
            </div>
            <div className="textCon">
              <span>
                <div className="word">A</div>
                <div className="word">FREELANCE</div>
                <div className="word">DEV</div>
              </span>
              <span>
                <div className="word">A</div>
                <div className="word">FREELANCE</div>
                <div className="word">DEV</div>
              </span>
            </div>
            <div className="textCon">
              <span>
                <div className="word">FULL-STACK</div>
                <div className="word">/</div>
                <div className="word">DESIGNER</div>
              </span>

              <span>
                <div className="word">FULL-STACK</div>
                <div className="word">/</div>
                <div className="word">DESIGNER</div>
              </span>
            </div>
            <div className="textCon">
              <span>
                <div className="word">&</div>
                <div className="word">ENGINEER</div>
              </span>
              <span>
                <div className="word">&</div>
                <div className="word">ENGINEER</div>
              </span>
            </div>
          </div>
          <div className="sec">
            <section className="homepage-kinetic laststag">
              <div className="shape"></div>
              <div className="shape"></div>
              <div className="shape"></div>
              <div className="shape"></div>
              <div className="shape"></div>
              <div className="shape"></div>
              <div className="shape"></div>
              <div className="shape"></div>
            </section>
          </div>
          <div className="descContent">
            <div className="firstLayer">
              <div className="quote">
                Constantly striving to create exceptional experience and tell your story in a meaningful way.
              </div>
              <div className="gridCon">
                <div className="gridItem">
                  <div className="item">
                    Web Design
                  </div>
                  <div className="item">
                    UX/UI Design
                  </div>
                  <div className="item">
                    3D Design
                  </div>
                  <div className="item">
                    Branding
                  </div>
                  <div className="item">
                    Motion Design
                  </div>
                  <div className="item">
                    Web Development
                  </div>
                </div>
                <div className="gridItem">
                  <div className="item">
                    PCUP (GOV)
                  </div>
                  <div className="item">
                    BPI Telesales
                  </div>
                  <div className="item">
                    Cafe Eunoia
                  </div>
                  <div className="item">
                    Riri's WRS
                  </div>
                  <div className="item">
                    Melchora High School
                  </div>
                </div>
                <div className="gridItem">
                  <div className="item">
                    PEOPLE
                  </div>
                  <div className="item">
                    OVER
                  </div>
                  <div className="item">
                    PROFIT
                  </div>
                </div>
              </div>
            </div>
            <div className="secLayer">
              <div className="item">
                SCROLL DOWN
              </div>
            </div>
          </div>
        </div>
        <div className="selectedWorks">
          <div className="workItem">
            SELECTED WORKS
            <div className="date">
              <span>('24)</span>
              <span>('23?)</span>
            </div> -
          </div>

          <div 
          onClick={() => {
            nav('/selectedwork/cafeeunoia')
          }}
          className="workItem contentWorkItem">
            <GridImgs imageItem={cafeEunoia} />
            <div className="imageCon item ">
              <img className='outerImg' src={cafeEunoia} alt="" />
            </div>

            <div className="nameCon">
              <div className="selectedCase">
                SELECTED CASE
              </div>
              <div className="title">
                CAFE EUNOIA
              </div>
            </div>
          </div>

          <div className="workItem contentWorkItem">
            <GridImgs imageItem={riri} />
            <div className="imageCon item ">
              <img className='outerImg' src={riri} alt="" />
            </div>

            <div className="nameCon">
              <div className="selectedCase">
                SELECTED CASE
              </div>
              <div className="title">
                RIRI'S WRS
              </div>
            </div>
          </div>


          <div className="workItem contentWorkItem">
            <GridImgs imageItem={ulc} />
            <div className="imageCon item ">
              <img className='outerImg' src={ulc} alt="" />
            </div>

            <div className="nameCon">
              <div className="selectedCase">
                SELECTED CASE
              </div>
              <div className="title">
                ULC TELESALES
              </div>
            </div>
          </div>


          <div className="workItem contentWorkItem">
            <GridImgs imageItem={pcup} />
            <div className="imageCon item ">
              <img className='outerImg' src={pcup} alt="" />
            </div>

            <div className="nameCon">
              <div className="selectedCase">
                SELECTED CASE
              </div>
              <div className="title">
                PCUP INV
              </div>
            </div>
          </div>

          <div className="workItem contentWorkItem">
            <GridImgs imageItem={melchoraIRS} />
            <div className="imageCon item ">
              <img className='outerImg' src={melchoraIRS} alt="" />
            </div>

            <div className="nameCon">
              <div className="selectedCase">
                SELECTED CASE
              </div>
              <div className="title">
                MELCHORA AAS
              </div>
            </div>
          </div>

          {/* <div className="workItemmarqs">
            <Marquee speed={200} autoFill>
              <div className="item">
                <span>PEOPLE</span> OVER PROFIT-
              </div>
            </Marquee>
          </div> */}
          <div className="workItem lastworkItem">
            <div className="button" onClick={() => { nav('/allworks') }}>
              <div className="textCon">
                <span>   + VIEW ALL PROJECTS </span>
                <span>    VIEW ALL PROJECTS +</span>
              </div>
            </div>
          </div>
        </div>

        <div className="more">
          <div className="textCon">
            <span>PASSIONATE ABOUT INNOVATION</span>
            <span>OVER 2 YEARS OF EXPERIENCE</span>
          </div>
          <div className="textCon">
            <span>DRIVEN BY TECHNOLOGY</span>
            <span>IN FULL-STACK FREELANCING</span>
          </div>
          <div className="textCon">
            <span>CREATING SOLUTIONS THAT INSPIRE</span>
            <span>CRAFTING WEBSITES AND DESIGN</span>
          </div>
          <div className="textCon">
            <span>AND TRANSFORM THE DIGITAL WORLD.</span>
            <span>WORK FOR CLIENTS OF ALL SIZES.</span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Homepage
