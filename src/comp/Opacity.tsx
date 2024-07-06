import { gsap } from 'gsap';
import { useEffect } from 'react';
import React from 'react';

const Opacity = () => {
    useEffect(() => {
        gsap.to('.slctd .content .right .content .title', {
            opacity: 1,
            duration: 0,
            delay: .5,
            onComplete: () => {
                gsap.to(
                    [
                        '.header',
                        '.imageItem',
                        '.slctd .content .right .content .title',
                        '.slctd .content .right .content .innerCon',
                        '.slctd .content .right .navigation .item'
                    ],
                    {
                        opacity: 1,
                        duration: 0.3,
                        delay: 1,
                    }
                );
            },
        });
    }, []); 


    return <React.Fragment />;
};

export default Opacity;
