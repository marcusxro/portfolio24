import React, { useEffect } from 'react'
import gsap from 'gsap'
import logoImg from '../mockups/LogoImg.jpg'


const Footer: React.FC = () => {



  useEffect(() => {
    const footerItems = document.querySelectorAll('.footer .firstLayer .midCon .item');

    footerItems.forEach((item) => {
      item.addEventListener('mouseover', () => {
        gsap.to(item.querySelectorAll('span'), {
          duration: 0.5,
          y: '0px',
          ease: 'bounce', yoyo: true
        });
      });
      item.addEventListener('mouseleave', () => {
        gsap.to(item.querySelectorAll('span'), {
          duration: 0.5,
          y: '-20px',
          ease: 'bounce', yoyo: true
        });
      });
    });
    return () => {
      footerItems.forEach((item) => {
        item.removeEventListener('mouseover', () => {
        });
      });
    };
  }, []);
  return (
    <div className="footer footerContainer">
      <div className="firstLayer">
        <div className="item address">
          <span>Sauyo</span>
          <span>(Quezon City, PH)</span>
        </div>
        <div className="midCon">
          <div className="item" onClick={() => { window.open('https://github.com/marcusxro/', '_blank') }}>
            <span>GitHub</span>
            <span>GitHub</span>
          </div>
          <div className="item" onClick={() => { window.open('https://www.instagram.com/mrcsxro/', '_blank') }}>

            <span>Instagram</span>
            <span>Instagram</span>
          </div>
          <div className="item" onClick={() => { window.open('https://www.facebook.com/marcuss09', '_blank') }}>

            <span>Facebook</span>
            <span>Facebook</span>
          </div>
          <div className="item" onClick={() => { window.location.href = "mailto:marcussalopaso1@gmail.com?subject=Hello&body=Let's work?"; }}>

            <span>Email</span>
            <span>Email</span>
          </div>
        </div>
        <div className="item">
          <span>Developed by</span>
          <span>Marcus S.</span>
        </div>
      </div>
      <div className="hiddenLayer">
        <div className="firstCon">
          <div className="item address">
          <span>Sauyo</span>
          <span>(Quezon City, PH)</span>
          </div>
          <div className="item">
            <span>Developed by</span>
            <span>Marcus S.</span>
          </div>
        </div>
        <div className="secCon">
          <div className="midCon">
            <div className="item" onClick={() => { window.open('https://github.com/marcusxro/', '_blank') }}>

              GitHub
            </div>
            <div className="item" onClick={() => { window.open('https://www.instagram.com/mrcsxro/', '_blank') }}>

              Instagram
            </div>
            <div className="item" onClick={() => { window.open('https://www.facebook.com/marcuss09', '_blank') }}>

              Facebook
            </div>
            <div className="item" onClick={() => { window.location.href = "mailto:marcussalopaso1@gmail.com?subject=Hello&body=Let's work?"; }}>
              Email
            </div>
          </div>
        </div>
      </div>

      <div className="secLayer">
        <div className="text">
          <img src={logoImg} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer
