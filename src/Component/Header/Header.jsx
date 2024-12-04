import React from "react";
import "../../Style/header/header.css";
import { GoBellFill } from "react-icons/go";
import { LuSettings2 } from "react-icons/lu";
import UserImg from '../../resources/User.png';

export default function Header(props) {

    return(
        <>
        <div className="header " >
            <div className="select_menu ">
                <span >{props.title}</span>
            </div>
            <div className="flex gap-16  pt-[1rem] pb-[1rem] header-second">
                <div className="flex items-center justify-center text-[1.2rem] bg-[#15274d] rounded-full text-[white] w-[40px] h-[40px]">
                    <LuSettings2 />
                </div>
                {/* <div className="flex items-center justify-center text-[1.2rem] border border-[#dcd1f0] rounded-full w-[40px] h-[40px] text-[rgba(49,0,137,255)]">
                    <GoBellFill />
                </div>
                <img src={UserImg} alt="user-img" className= "w-[40px] h-[40px]"/> */}
            </div>
        </div>
        </>
       
    );
}