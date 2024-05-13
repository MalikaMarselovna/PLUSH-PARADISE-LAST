import React from "react";
import {
  Search,
  LocalMall,
  Favorite,
  HowToReg,
  AssignmentInd,
} from "@material-ui/icons";
import Logo from "./img/logo.svg";
import { Badge } from "@material-ui/core";

function Navbar() {
  const style = "text-[14px] cursor-pointer ml-[25px] easy-in duration-600";
  return (
    <div className="navbar shadow-md relative z-10 ">
      <div className="wrapper pl-[20px] pr-[20px] pt-[10px] pb-[10px] flex justify-between items-center">
        {/* logo */}
        <div className="center flex-1 text-center ">
          <div className="logo font-bold text-lg">
            {" "}
            <img src={Logo} alt="" className="w-[40%] cursor-pointer" />
          </div>
        </div>
        {/* left div */}
        <div className="left flex flex-1 items-center ">
          <div className="searchInput flex border-[2px] border-solid border-lighgrey rounded-md items-center ml-[10px] p-[5px] focus-within:border-[#f92e9e] transition-all">
            <input
              type="text"
              className="input outline-none w-[500px]"
              placeholder="What are you looking for?"
            />
            <Search className="text-[#f92e9e]" style={{ fontSize: "22px" }} />
          </div>
        </div>

        {/* right div */}
        <div className="right flex flex-1 items-center justify-end">
          <button className={style}>
            <HowToReg className="text-[#f92e9e]  hover:text-[#16ffbd] " style={{ fontSize: "35px" }} />
            {/* register */}
          </button>
          <button className={style}>
            <AssignmentInd className="text-[#f92e9e]  hover:text-[#16ffbd] easy-in duration-600" style={{ fontSize: "35px" }}/> 
            {/* sign in */}
          </button>
          <button>
            <Favorite
              className="ml-3 text-[#f92e9e]  hover:text-[#16ffbd] easy-in duration-600"
              style={{ fontSize: "35px" }}
            />
          </button>
          <button className={style}>
            <Badge badgeContent={1} color="primary" className="text-[#16ffbd] ">
              <LocalMall
                className="text-[#f92e9e]  hover:text-[#16ffbd] easy-in duration-600"
                style={{ fontSize: "35px" }}
              />
            </Badge>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
