import React, { useState } from "react";
import "../../Style/slidebar/slidebar.css";
import logo from "../../resources/logo.png"
import { TbLayoutDashboard } from "react-icons/tb";
import { NavLink} from "react-router-dom";

export default function Slidebar(props){

    const menuLists= [
        {
            path:"/application",
            name:'Applications'
        }
    ];
    
    return(
        <nav>
            <div className="Navbar">
                <div>
                    <div className="flex flex-col items-left w-auto mt-[1rem] mb-[1rem]">
                        <div className="h-[auto] w-[auto]">
                        <img src={logo} alt="logo"/>
                        </div>
                        <span className="pl-[3rem] flex gap-2 text-[16px] text-[#616C80] company-logo">
                            <span>Business Lending.</span>
                            <span>Simplified.</span>
                        </span>
                    </div>
                </div>
                {/* <div className="box">
                    <div className="first">
                        {
                            menuLists.map((menuList, index)=>{
                                return(
                                    <NavLink key={index} to= {menuList.path} style={({ isActive }) => ({
                                        color: isActive ? "blue" : "#262525", 
                                        backgroundColor: isActive ? "white" : "transparent",
                                        borderRadius:"5px"
                                    })}>
                                        <TbLayoutDashboard className="icon"/>
                                        <span>{menuList.name}</span>
                                    </NavLink>
                                );
                            })
                        }
                    </div>
                    
                </div> */}
            </div>
        </nav>
    );
}
