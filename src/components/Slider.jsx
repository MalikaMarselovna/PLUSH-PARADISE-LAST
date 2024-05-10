import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import React, { useState } from 'react'
import { ApiSlides } from '../apiFolder/SliderApi'
import './Slider.css'


function Slider() {
    //useState
    const[slides] = useState(ApiSlides)
    const[activeSlide, setActiveSlide] = useState(0)

    //style
    const arrowStyle = " rounded-full bg-grey flex  shadow-sm items-center  justify-center hover:cursor-pointer";

    const nextSlide =()=> {
        if(activeSlide ===slides.length - 1)
        {
            setActiveSlide(0)
        }
        else{
            setActiveSlide(activeSlide + 1)
        }
    }

    const prvslide =()=> {
        if(activeSlide === 0){
            setActiveSlide(slides.length - 1)
        }
        else{
            setActiveSlide(activeSlide - 1)
        }

    }


  return (
    <div className="parentDiv h-540px bg-white flex items-center justify-between">
        {/* leftarrow */}
        <div className={arrowStyle}>
            <ArrowLeftOutlined  style={{fontSize : '50px'}} onClick={prvslide}/>
        </div>
        {/* slide div */}
        {slides.map((slide, index)=>{
            if(index ===activeSlide){
                return(
                    <div className={`wrapper flex w-[100%] h-[600px] justify-center items-center shadow-2xl rounded-lg border-[#c0c0c0] border-10px   mt-[10px] overflow-hidden relative ` + slide.background}>
                    <div className="slide flex items-center justify-center h-[100%]">
                        <div className='forImage flex flex-1 justify-center items-center h-[100%]'>
                            <img
                            className="h-[100%] object-cover" 
                            src={slide.src}
                            alt="slide+image"/>
                        </div>
                        <div className='des flex flex-col flex-1 place-items-start justify-center -ml-11'>
                            <h2 className="text-[55px] mr-[10px]"> {slide.content.h2} </h2>
                            <p className="text-[30px] mb-[20px]">{slide.content.p}</p>
                            <button className='btn'>Shop Now</button>
                        </div>
                    </div>
                </div>
                )
            }
        })}
   
        {/* rightarrow div */}
        <div className={arrowStyle}>
            <ArrowRightOutlined style={{fontSize : '50px'}} onClick = {nextSlide}/>
        </div>

    </div>
  )
}

export default Slider