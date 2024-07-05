import React, {useEffect} from 'react'
import gsap from 'gsap';


const Footer = () => {
    useEffect(() => {
        const itemShow: NodeListOf<Element> = document.querySelectorAll('.landing .landingCon .textCon span .word');
        window.scrollTo(0, 0)
        gsap.to(itemShow, {
          opacity: 1,
          stagger: 0.1,
          duration: 0,
          onComplete: () => {
            gsap.to(['.landing .descContent', '.homepage-kinetic', '.selectedWorks', '.footer', ], {
              opacity: 1,
              delay: .7
            })
          }
        })
      }, []);

      
  useEffect(() => {
    const footerItems = document.querySelectorAll('.footer .firstLayer .midCon .item');

    footerItems.forEach((item) => {
      item.addEventListener('mouseover', () => {
        gsap.to(item.querySelectorAll('span'), {
          duration: 0.5,
          y: '0px',
      ease: 'bounce',          yoyo: true
        });
      });
      item.addEventListener('mouseleave', () => {
        gsap.to(item.querySelectorAll('span'), {
          duration: 0.5,
          y: '-20px',
      ease: 'bounce',          yoyo: true
        });
      });
    });
    return () => {
      footerItems.forEach((item) => {
        item.removeEventListener('mouseover', () => {
          // we are removing the listeners
        });
      });
    };
  }, []);
    return (
        <div className="footer">
            <div className="firstLayer">
                <div className="item address">
                    <span>Area 5B</span>
                    <span>(Sauyo/Quezon City)</span>
                </div>
                <div className="midCon">
                    <div className="item">
                        <span>GitHub</span>
                        <span>GitHub</span>
                    </div>
                    <div className="item">
                        <span>Instagram</span>
                        <span>Instagram</span>
                    </div>
                    <div className="item">
                        <span>Facebook</span>
                        <span>Facebook</span>
                    </div>
                    <div className="item">
                        <span>Email</span>
                        <span>Email</span>
                    </div>
                </div>
                <div className="item">
                    <span>Developed & Designed by</span>
                    <span>Marcus S.</span>
                </div>
            </div>
            <div className="hiddenLayer">
                <div className="firstCon">
                    <div className="item address">
                        <span>Area 5B</span>
                        <span>(Sauyo/Quezon City)</span>
                    </div>
                    <div className="item">
                        <span>Developed & Designed by</span>
                        <span>Marcus S.</span>
                    </div>
                </div>
                <div className="secCon">
                    <div className="midCon">
                        <div className="item">
                            GitHub
                        </div>
                        <div className="item">
                            Instagram
                        </div>
                        <div className="item">
                            Facebook
                        </div>
                        <div className="item">
                            Email
                        </div>
                    </div>
                </div>
            </div>

            <div className="secLayer">
                <div className="text">
                    MR©S
                </div>
            </div>
        </div>
    )
}

export default Footer
