import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useNavigate, useParams } from 'react-router-dom';
import { MyWorks } from '../../resources/Works';
import { Navigate } from 'react-router-dom';
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll';
import Opacity from '../../comp/Opacity';
import VisitProject from '../../comp/VisitProject';
import ScrollToTop from '../../comp/ScrollToTop';
import ProjectHeader from '../../comp/ProjectHeader';
import Navigator from '../../comp/Navigator';


const Riri: React.FC = () => {

    const { workID } = useParams<{ workID: string }>();
    const leftColumnRef = useRef<HTMLDivElement>(null);
    const rightColumnRef = useRef<HTMLDivElement>(null);
    const [scrollWidthDoc, setScrollWidthDoc] = useState<number>(0);
    const prevScrollWidth = useRef<number>(0);

    useEffect(() => {
        if (MyWorks.length > 0) {
            document.title = `Riri's WRS - MR©S`;
        }
    }, [workID]);


    const userScrollTimeout = useRef<NodeJS.Timeout | null>(null);
    const isUserScrolling = useRef<boolean>(false);
    const animationFrameId = useRef<number | null>(null);
    const scrollSpeed = useRef<number>(100);


    const outerDiv = useRef<HTMLDivElement>(null)


    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);


        const updateScrollPercentage = () => {
            const scrollHeight = leftColumnRef.current?.scrollHeight || 0;
            const scrollTop =
                window.scrollY ||
                window.pageYOffset ||
                document.documentElement.scrollTop ||
                document.body.scrollTop ||
                0;
            const percentage = (scrollTop / scrollHeight) * 100;


            gsap.to('.left', {
                y: -percentage + '%',
                duration: 0.5,

            });


        }; 

        const scrollToTop = () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };

        const handleAutoScroll = () => {
            if (isUserScrolling.current) return;

            const scrollTop =
                window.scrollY ||
                window.pageYOffset ||
                document.documentElement.scrollTop ||
                document.body.scrollTop ||
                0;
            const scrollHeight =
                document.documentElement.scrollHeight - window.innerHeight;

            if (scrollTop >= scrollHeight) {
                scrollToTop();
            } else {
                window.scrollBy({ top: scrollSpeed.current, behavior: 'smooth' });
            }

            animationFrameId.current = requestAnimationFrame(handleAutoScroll);
        };

        const stopAutoScroll = () => {
            if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
        };

        const handleUserScroll = () => {
            isUserScrolling.current = true;
            stopAutoScroll(); 

            if (userScrollTimeout.current) clearTimeout(userScrollTimeout.current);
            userScrollTimeout.current = setTimeout(() => {
                isUserScrolling.current = false;
                handleAutoScroll();
            }, 2000); 
        };

        window.addEventListener('scroll', updateScrollPercentage);



        window.addEventListener('scroll', handleUserScroll);


        setTimeout(() => {
            handleAutoScroll();
        }, 2000);


        return () => {
            window.removeEventListener('scroll', updateScrollPercentage);
            window.removeEventListener('scroll', handleUserScroll);
            if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
            if (userScrollTimeout.current) clearTimeout(userScrollTimeout.current);
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };

    }, [workID, prevScrollWidth]);




    const nav = useNavigate()


    useEffect(() => {
        const handleResize = () => {
            const docScrollWidth = document.documentElement.scrollWidth || document.body.scrollWidth;

            if (docScrollWidth !== prevScrollWidth.current) {
                setScrollWidthDoc(docScrollWidth);
            }
        };

        let resizeTimeout: NodeJS.Timeout;
        const debouncedResize = () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(handleResize, 200);
        };
        handleResize();


        window.addEventListener('resize', debouncedResize);

        return () => {
            clearTimeout(resizeTimeout);
            window.removeEventListener('resize', debouncedResize);
        };
    }, []); 

    useEffect(() => {
        if (prevScrollWidth.current !== 0 && scrollWidthDoc !== prevScrollWidth.current) {
            window.location.reload();
        }
        prevScrollWidth.current = scrollWidthDoc;
    }, [scrollWidthDoc, prevScrollWidth]);




    useEffect(() => {
        const hasReloaded = localStorage.getItem('hasReloaded');
        if (!hasReloaded) {
            localStorage.setItem('hasReloaded', 'true');
            window.location.reload();
        } else {
            console.log('Page has already reloaded.');
        }
    }, []); 

    const nextBtn = () => {
        gsap.to([`.header`, '.imageItem',
            '.slctd .content .right .content .title',
            '.slctd .content .right .content .innerCon',
            '.slctd .content .right .navigation .item',
            '.slctd .content .right .content .title'], {
            opacity: 0,
            duration: 0,
            onComplete: () => {
                nav(`/selectedwork/${MyWorks[1]?.next}`);
                window.scrollTo(0, 0)
            }
        })

    }
    const [emblaRef, emblaApi] = useEmblaCarousel(
        { loop: true }, 
        [AutoScroll({ startDelay: 2000, stopOnInteraction: false, })] 
    );


    const [docuHeigth, setDocuHeight] = useState<number | string>(0)
    useEffect(() => {
        const heightForEl = scrollWidthDoc >= 1100 ? leftColumnRef.current?.scrollHeight + 'px' : '100dvh'
        setDocuHeight(heightForEl)

    }, [scrollWidthDoc])



    return (
        <div className="SelectedWorks slctd" style={{ height:docuHeigth}}>
            <Opacity />
            <ScrollToTop />
            <ProjectHeader />
            <div className="content">
                <div className="left" ref={leftColumnRef}>
                    {MyWorks.length > 0 && MyWorks[1]?.images.length > 0 &&
                        MyWorks[1].images.map((image, index) => (
                            image.type === 'img' ?
                                <div className="imageItem" key={index}>
                                    <img src={image.src} alt={`Image ${index + 1}`} />
                                </div> :
                                <div className="imageItem videos" key={index}>
                                    {image.type === 'vid' &&
                                        <video autoPlay muted loop playsInline key={image.src}>
                                            <source src={image.src} type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                    }
                                </div>
                        ))
                    }
                </div>

                <div className="embla SmallLeft" ref={emblaRef}>
                    <div className="embla__container">
                        {MyWorks.length > 0 && MyWorks[1]?.images.length > 0 &&
                            MyWorks[1].images.map((image, index) => (
                                <div className="embla__slide imageItem" key={index}>
                                    {image.type === 'img' ? (
                                        <img src={image.src} alt={`Image ${index + 1}`} />
                                    ) : image.type === 'vid' ? (
                                        <video autoPlay muted loop playsInline>
                                            <source src={image.src} type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                    ) : null}
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className="right" ref={rightColumnRef}>
                    <div className="content">
                        <div className="title">{MyWorks[1]?.title}</div>
                        <div className="innerCon">
                            <div className="info">
                                <div className="headerText">INFO</div>
                                <div className="text">{MyWorks[1]?.info}</div>
                            </div>
                            <div className="role">
                                <div className="headerText">ROLES</div>
                                {MyWorks[1]?.role.map((itm, index) => (
                                    <div className="roles" key={index}>{itm}</div>
                                ))}
                            </div>
                            <div className="tech">
                                <div className="headerText">TECHNOLOGIES</div>
                                {MyWorks[1]?.techs.map((itm, index) => (
                                    <div className="roles" key={index}>{itm}</div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <Navigator visitProject={MyWorks[1]?.link} nextProject={MyWorks[1]?.next} />
                </div>
            </div>
        </div>
    );
};

export default Riri;
