import React from 'react'
import { Search,ShoppingCartOutlined } from '@material-ui/icons';
import Logo from './img/logo.svg'
import { Badge } from '@material-ui/core';

function Navbar() {
    const style = "text-[14px] cursor-pointer ml-[25px]"
    return (
        <div className='navbar shadow-md relative z-10 '>
            <div className='wrapper pl-[20px] pr-[20px] pt-[10px] pb-[10px] flex justify-between items-center'>
                 {/* logo */}
                 <div className="center flex-1 text-center ">
                    <div className="logo font-bold text-lg"> <img src={Logo} alt="" className='w-[30%] cursor-pointer' /></div>

                </div>
                {/* left div */}
                <div className='left flex flex-1 items-center '>
                    <div className='language cursor-pointer text-[16px] '>
                        Eng
                    </div>
                    <div className="searchInput flex border-[2px] border-solid border-lighgrey rounded-md items-center ml-[10px] p-[5px] focus-within:border-[#f92e9e] transition-all">
                        <input type="text" className="input outline-none w-[500px]" />
                        <Search className='' style={{fontSize: '16px'}}/>
                    </div>

                </div>

                
                {/* right div */}
                <div className="right flex flex-1 items-center justify-end">
                    <div className={style} >register</div>
                    <div className={style} >sign in</div>
                    <div className={style} >
                    <Badge badgeContent={2} color='primary'>
                        <ShoppingCartOutlined/>
                    </Badge>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Navbar