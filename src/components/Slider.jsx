import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import React, { useState } from 'react'
import { ApiSlides } from '../apiFolder/SliderApi';


function Slider() {
    //useState
    const[slides] = useState(ApiSlides)
    const[activeSlide, setActiveSlide] = useState(0)

    //style
    const arrowStyle = " rounded-full bg-grey flex  shadow-sm items-center  justify-center hover:cursor-pointer";
  return (
    <div className="parentDiv h-540px bg-white flex items-center justify-between">
        {/* leftarrow */}
        <div className={arrowStyle}>
            <ArrowLeftOutlined  style={{fontSize : '50px'}}/>
        </div>
        {/* slide div */}
   
        {/* rightarrow div */}
        <div className={arrowStyle}>
            <ArrowRightOutlined style={{fontSize : '50px'}}/>
        </div>

    </div>
  )
}

export default Slider