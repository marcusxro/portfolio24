import React from 'react'
import imageItem from '../mockups/cafe.png'
import Marquee from 'react-fast-marquee'



interface propsItem {
    imageItem: string
}
const GridImgs: React.FC<propsItem> = ({imageItem}) => {


    return (
        <div className='GridImgs'>
            <div className="container">


                <Marquee autoFill direction='right'>
                    <div className="gridItem">
                        <img src={imageItem} alt="" />
                    </div>
                </Marquee>


                <Marquee autoFill>
                    <div className="gridItem">
                        <img src={imageItem} alt="" />
                    </div>
                </Marquee>
                

 
                <Marquee autoFill direction='right'>
                    <div className="gridItem">
                        <img src={imageItem} alt="" />
                    </div>
                </Marquee>
                

                <Marquee autoFill>
                    <div className="gridItem">
                        <img src={imageItem} alt="" />
                    </div>
                </Marquee>
                

            
                <Marquee autoFill direction='right'>
                    <div className="gridItem">
                        <img src={imageItem} alt="" />
                    </div>
                </Marquee>
                

                <Marquee autoFill>
                    <div className="gridItem">
                        <img src={imageItem} alt="" />
                    </div>
                </Marquee>
                

    
                <Marquee autoFill direction='right'>
                    <div className="gridItem">
                        <img src={imageItem} alt="" />
                    </div>
                </Marquee>
                
                <Marquee autoFill>
                    <div className="gridItem">
                        <img src={imageItem} alt="" />
                    </div>
                </Marquee>
                

    
                <Marquee autoFill direction='right'>
                    <div className="gridItem">
                        <img src={imageItem} alt="" />
                    </div>
                </Marquee>
                
                <Marquee autoFill>
                    <div className="gridItem">
                        <img src={imageItem} alt="" />
                    </div>
                </Marquee>
                

    
                <Marquee autoFill direction='right'>
                    <div className="gridItem">
                        <img src={imageItem} alt="" />
                    </div>
                </Marquee>
            </div>
        </div>
    )
}

export default GridImgs

