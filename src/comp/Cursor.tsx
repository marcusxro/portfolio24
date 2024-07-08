import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import Marquee from 'react-fast-marquee';
import { useLocation } from 'react-router-dom';

const Cursor: React.FC = () => {
    const location = useLocation();
    const [hoverWork, setHoverWork] = useState<boolean>(false);
    const [projectName, setProjectName] = useState<string | null>(null);

    useEffect(() => {
        const onMouseMove = (e: MouseEvent) => {
            gsap.to('.cursor', {
                x: e.clientX,
                y: e.clientY,
                duration: 0.5,
                ease: 'power1.out',
            });
        };

        document.addEventListener('mousemove', onMouseMove);

        return () => {
            document.removeEventListener('mousemove', onMouseMove);
        };
    }, []);

    useEffect(() => {
        const updateHoverWorkState = () => {
            setHoverWork(false);
            const itemHover = document.querySelectorAll('.selectedWorks .contentWorkItem');

            const goDown = () => {
                gsap.to('.cursor', {
                    scale: 2.5,
                    ease: 'bounce',
                });
                setHoverWork(true);
            };

            const goUp = () => {
                gsap.to('.cursor', {
                    scale: 1,
                    ease: 'bounce',
                });
                setHoverWork(false);
            };

            itemHover.forEach((itm) => {
                itm.addEventListener('mouseover', goDown);
                itm.addEventListener('mouseleave', goUp);
            });

            return () => {
                itemHover.forEach((itm) => {
                    itm.removeEventListener('mouseover', goDown);
                    itm.removeEventListener('mouseleave', goUp);
                });
            };
        };

        updateHoverWorkState();
    }, [location.pathname]);

    const getProjectName = (path: string) => {
        switch (path) {
            case '/selectedwork/cafeeunoia':
                return 'CAFE EUNOIA';
            case '/selectedwork/melchoraas':
                return 'MELCHORA AAS';
            case '/selectedwork/ririswrs':
                return "RIRI'S WRS";
            case '/selectedwork/pcup':
                return 'PCUP';
            case '/selectedwork/ulctelesales':
                return 'ULC TELESALES';
            default:
                return null;
        }
    };

    useEffect(() => {

        const removeTheName = () => {
            setProjectName(null)
            gsap.to('.cursor', {
                scale: 3.5,
                ease: 'bounce',
            });
        }


        const placeItAgain = () => {
            setProjectName(currentProjectName);
            gsap.to('.cursor', {
                scale: 2.5,
                ease: 'bounce',
            });
        }


        const toHoverElements = (params: Element[]) => {
            params.forEach((itm) => {
                itm.addEventListener("mouseover", removeTheName)
                itm.addEventListener("mouseleave", placeItAgain)
            })

            return () => {
                params.forEach((itm) => {
                    itm.addEventListener("mouseover", removeTheName)
                    itm.addEventListener("mouseleave", placeItAgain)
                })
            }
        }

        const currentProjectName = getProjectName(location.pathname);
        const itemHover = Array.from(document.querySelectorAll('.slctd .navigation .item'))
        const itemHovers = Array.from(document.querySelectorAll('.slctd .header .hoverITEM'))

        const elementArr = [...itemHover, ...itemHovers]

        if (currentProjectName) {
            setProjectName(currentProjectName);
            toHoverElements(elementArr)
            gsap.to('.cursor', {
                scale: 2.5,
                ease: 'bounce',
            });
            return () => {
                gsap.to('.cursor', {
                    scale: 2.5,
                    ease: 'bounce',
                });
            }
        } else {
            setProjectName(null);
            gsap.to('.cursor', {
                scale: 1,
                ease: 'bounce',
            });
            return () => {
                gsap.to('.cursor', {
                    scale: 1,
                    ease: 'bounce',
                });
            }
        }
    }, [location.pathname]);


    return (
        <div className="cursor">
            {hoverWork && (
                <Marquee autoFill speed={30}>
                    <div className="item">VIEW WORK-</div>
                </Marquee>
            )}

            {projectName && (
                <Marquee autoFill speed={30}>
                    <div className="item">{projectName}-</div>
                </Marquee>
            )}
        </div>
    );
};

export default Cursor;
