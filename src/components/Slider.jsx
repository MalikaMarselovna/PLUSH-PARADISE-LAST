import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import React from 'react'

function Slider() {
    const arrowStyle = " rounded-full bg-grey flex  shadow-sm items-center  justify-center hover:cursor-pointer";
  return (
    <div className="parentDiv h-540px bg-white flex items-center justify-between">
        {/* leftarrow */}
        <div className={arrowStyle}>
            <ArrowLeftOutlined  style={{fontSize : '50px'}}/>
        </div>
        {/* slide div */}
        <div className='wrapper flex w-[100%] h-[600px] justify-center items-center shadow-2xl rounded-lg border-[#c0c0c0] border-10px   mt-[10px] overflow-hidden relative bg-[#fff]'>
            <div className="slide flex items-center justify-center h-[100%]">
                <div className='forImage flex flex-1 justify-center items-center h-[100%]'>
                    <img
                    className="h-[100%] object-cover" 
                    src='
                    https://amigurumi.today/wp-content/uploads/2023/06/Free-pink-giraffe-crochet-pattern.jpg' alt='slide-image'/>
                </div>
                <div className='des flex flex-col flex-1 place-items-start justify-center -ml-11'>
                    <h2 className="text-[55px] mr-[10px]"> Hey this is  awsome todey deal today </h2>
                    <p className="text-[30px] mb-[20px]">Upto 40% off</p>
                    <button className='btn'>Shop Now</button>
                </div>
            </div>
        </div>
        {/* rightarrow div */}
        <div className={arrowStyle}>
            <ArrowRightOutlined style={{fontSize : '50px'}}/>
        </div>

    </div>
  )
}

export default Slider