import React, { useCallback, useEffect, useRef, useState } from 'react'
import Header from '../comp/Header'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { CustomEase } from "gsap/CustomEase";

//mockup imgs
import riri from '../mockups/orderingAPp.jpg'
import cafeEunoia from '../mockups/cafe.png'
import ulc from '../mockups/ulcImg.jpg'
import pcup from '../mockups/pcupIt.jpg'
import melchoraIRS from '../mockups/melchoraScanner.jpg'


import { useNavigate } from 'react-router-dom';
import Footer from '../comp/Footer';
import ScrollToTop from '../comp/ScrollToTop';



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
  }, []);


  const [imgArr, setImgArr] = useState<HTMLImageElement[]>([])
  const [completedAnimations, setCompletedAnimations] = useState<string[]>([]); // Track completed animations by image src

  useEffect(() => {
    const itemHover: NodeListOf<HTMLImageElement> = document.querySelectorAll('.selectedWorks .workItem .imageCon .outerImg');

    itemHover.forEach((showImg) => {
      gsap.to(showImg, {
        height: '100%',
        ease: 'power1.in',
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
        duration: 0.7, // Duration of the animation
      });
    });
  }, []); // Run on initial rener


  const [prefImgs, setPrefsImgs] = useState<{ src: string; index: number }[]>([]);

  const itemHover: NodeListOf<HTMLImageElement> = document.querySelectorAll('.selectedWorks .workItem .imageCon .outerImg');

  const allowedToHover: Set<string> = new Set();
  const hoverImageSources: { src: string, height: number, index: number, allowed?: boolean }[] = Array.from(itemHover)
    .map((img, index) => ({
      src: img.src,
      height: img.height,
      index,
      allowed: img.height >= 250
    }));


  useEffect(() => {
    hoverImageSources.forEach((image) => {
      if (image.allowed && prefImgs.some(prefImg => prefImg.src === image.src)) {
        allowedToHover.add(image.src);

      }
    });
  }, [prefImgs, hoverImageSources]);



  const handleMouseEnter = useCallback((showImg: Element) => {
    const imgElementsList = showImg.querySelectorAll<HTMLImageElement>('img');
    const imgs: HTMLImageElement[] = Array.from(imgElementsList);

    const hoverImageSources: string[] = imgs.map(img => img.src);
    const storedImageSources: string[] = imgArr.map(img => img.src);


    const anyImgIncluded = Array.from(allowedToHover).some(src => hoverImageSources.includes(src));


    if (anyImgIncluded) {
      gsap.to(showImg.querySelectorAll('img'), { opacity: 1, duration: 0 });

      if (imgs.length >= 2) {
        const [firstImg, secondImg] = imgs;

        const tl = gsap.timeline({ defaults: { duration: 0.5, ease: 'Power4.inOut' } });
        tl.to('.absoImg', { opacity: 1 })
          .to(firstImg, { scale: 0.8 })
          .to(secondImg, { scale: 0.5, zIndex: 1000 }, 0)
          .to(firstImg, { scale: 1, delay: 0.2 })
          .to(secondImg, { scale: 1, zIndex: 1000 }, '-=0.4');
      } else {
        console.log('Not enough img elements found in this .absoImg.');
      }
    }


    setPrefsImgs((prevImgs) => {
      const existingSrcs = prevImgs.map(img => img.src);
      const newImgs = hoverImageSources.filter((src) => !existingSrcs.includes(src));

      const updatedImgs = newImgs.map((src, index) => ({
        src,
        index: index
      }));

      return [...prevImgs, ...updatedImgs];
    });

  }, [imgArr, hoverImageSources]);



  useEffect(() => {
    const itemHovers = document.querySelectorAll('.selectedWorks .workItem .imageCon .absoImg');

    itemHovers.forEach((showImg) => {
      showImg.addEventListener('mouseenter', () => handleMouseEnter(showImg));
    });

    // Clean up event listeners to prevent memory leaks
    return () => {
      itemHovers.forEach((showImg) => {
        showImg.removeEventListener('mouseenter', () => handleMouseEnter(showImg));
      });
    };
  }, [handleMouseEnter, allowedToHover]); // Ensure handleMouseEnter is stable




  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.to('.workItem .date span', {
      y: '-2vw',
      scrollTrigger: {
        trigger: '.workItem .date',
        start: 'top 80%',
        end: 'bottom',
        scrub: 1
      }
    })
  }, [])


  const nav = useNavigate()


  useEffect(() => {

    const itemShow: NodeListOf<Element> = document.querySelectorAll('.landing .landingCon .textCon span .word');
    window.scrollTo(0, 0)
    gsap.to(itemShow, {
      opacity: 1,
      stagger: 0.1,
      duration: 0,
      onComplete: () => {
        gsap.to(['.landing .descContent', '.homepage-kinetic', '.selectedWorks', '.footer', 'header', '.more'], {
          opacity: 1,
          delay: .7
        })
      }
    })
  }, []);


  return (
    <div className='Homepage'>
      <Header />
      <ScrollToTop />

      <div className="content">
        <div className="landing">
          <div className="landingCon">
            <div className="textCon">
              <span>
                <div className="word">MR©S</div>
                <div className="word">IS</div>
              </span>
              <span>
                <div className="word">MR©S</div>
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
                  Web Design<br />
                  UX/UI Design<br />
                  3D Design<br />
                  Branding<br />
                  Motion Design<br />
                  Web Development<br />
                </div>
                <div className="gridItem">
                  PCUP (GOV) <br />
                  BPI Telesales<br />
                  Cafe Eunoia<br />
                  Riri's WRS<br />
                  Melchora High School<br />
                </div>
                <div className="gridItem">
                  PEOPLE<br />
                  OVER<br />
                  PROFIT<br />

                </div>
              </div>
            </div>
            <div className="secLayer">
              SCROLL DOWN
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
          <div className="workItem">
            <div
              onClick={() => {
                nav(`selectedwork/cafeeunoia`)
              }}
              className="con">
              <div className="imageCon item">
                <img className='outerImg' src={cafeEunoia} alt="" />
                <div className="absoImg">
                  <img src={cafeEunoia} alt="" />
                  <img src={cafeEunoia} alt="" />
                </div>
              </div>
              <div className="nameCon">
                <div className="item title">
                  <span>Cafe Eunoia</span>
                </div>
                <div className="num item">
                    //01
                </div>
              </div>
            </div>
          </div>
          <div className="workItem">
            <div
              onClick={() => {
                nav(`selectedwork/ririswrs`)
              }}
              className="con">
              <div className="imageCon item">
                <img className='outerImg' src={riri} alt="" />
                <div className="absoImg">
                  <img src={riri} alt="" />
                  <img src={riri} alt="" />
                </div>
              </div>
              <div className="nameCon">
                <div className="item title">
                  Riri's WRS
                </div>
                <div className="num item">
                    //02
                </div>
              </div>
            </div>
          </div>
          <div className="workItem">
            <div
              onClick={() => {
                nav(`selectedwork/ulctelesales`)
              }}
              className="con">
              <div className="imageCon item">
                <img className='outerImg' src={ulc} alt="" />
                <div className="absoImg">
                  <img src={ulc} alt="" />
                  <img src={ulc} alt="" />
                </div>
              </div>
              <div className="nameCon">
                <div className="item title">
                  ULC Telesales
                </div>
                <div className="num item">
                    //03
                </div>
              </div>
            </div>
          </div>
          <div className="workItem">
            <div
              onClick={() => {
                nav(`selectedwork/pcup`)
              }}
              className="con">
              <div className="imageCon item">
                <img className='outerImg' src={pcup} alt="" />
                <div className="absoImg">
                  <img src={pcup} alt="" />
                  <img src={pcup} alt="" />
                </div>
              </div>
              <div className="nameCon">
                <div className="item title">
                  PCUP
                </div>
                <div className="num item">
                    //04
                </div>
              </div>
            </div>
          </div>
          <div className="workItem">
            <div
              onClick={() => {
                nav(`selectedwork/melchorairs`)
              }}
              className="con">
              <div className="imageCon item">
                <img className='outerImg' src={melchoraIRS} alt="" />
                <div className="absoImg">
                  <img src={melchoraIRS} alt="" />
                  <img src={melchoraIRS} alt="" />
                </div>
              </div>
              <div className="nameCon">
                <div className="item title">
                  MELCHORA IRS
                </div>
                <div className="num item">
                    //05
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="more">
          <div className="textCon">
            <span>OVER 2 YEARS OF EXPERIENCE</span>
            <span>OVER 2 YEARS OF EXPERIENCE</span>
          </div>
          <div className="textCon">
            <span>IN FULL-STACK FREELANCING</span>
            <span>IN FULL-STACK FREELANCING</span>
          </div>
          <div className="textCon">
            <span>CRAFTING WEBSITES AND DESIGN</span>
            <span>CRAFTING WEBSITES AND DESIGN</span>
          </div>
          <div className="textCon">
            <span>WORK FOR CLIENTS OF ALL SIZES.</span>
            <span>WORK FOR CLIENTS OF ALL SIZES.</span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Homepage
