import React, { useState } from "react";
import "../../Style/slidebar/slidebar.css";
import logo from "../../resources/logo.jpeg"
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
            <div className="slidebar-menu">
                <div>
                    {/* <img src={logo} alt="logo" className="h-[80px] w-[165px] mt-[1.5rem] mb-[1rem]"/> */}
                    <div className="flex flex-col font-[800] text-[blue] text-[2.5rem] leading-7 w-[90px]">Fora 
                        <span className="text-[1rem] font-[500] text-right">financial</span>
                    </div>
                    {/* <div className="beta">{props.beta}</div> */}
                </div>
                <div className="box">
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
                    
                </div>
            </div>
        </nav>
    );
}
