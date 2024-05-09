import React from 'react'

function Navbar() {
    return (
        <div className='navbar h-[60px] shadow-md relative z-10'>
            <div className='wrapper pl-[20px] pr-[20px] pt-[10px] pb-[10px] flex justify-between items-center'>
                {/* left div */}
                <div className='left flex flex-1 items-center '>
                    <div className='language cursor-pointer text-[16px] '>
                        Eng
                    </div>
                    
                </div>


                <div>2</div>
                <div>3</div>

            </div>
        </div>
    )
}

export default Navbar