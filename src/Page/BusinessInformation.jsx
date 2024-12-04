import React, { useState} from "react";
import { FiEdit2 } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";
import { IoMdArrowDropdown } from "react-icons/io";
import { NavLink } from "react-router-dom";

export default function BusinessInformation(){
    const menuu = 
    [
        {
            path:"/application/overview",
            name:"Overview"
        },
        {
            path:"/application/documents",
            name:"Documents"
        },
        {
            path:"/application/client-details",
            name:"Underwriting"
        },
        {
            path:"/application/notes",
            name:"Notes"
        },
        {
            path:"/application/history",
            name:"History"
        },
        {
            path:"/application/history",
            name:"Decision"
        }
    ];
    const menuLists = 
    [
        {
            path:"/",
            name:"1. Basic Information"
        },
        {
            path:"/businessInformation",
            name:"2. Business Information"
        },
        {
            path:"/guarantorInformation",
            name:"3. Guarantor Information"
        },
        {
            path:"/businessDocuments",
            name:"4. Business Documents"
        },
    ];

    return(
        <>
        <div className='Container'>
                <div className="overviewSection">
                    <div className="flex items-center justify-center  bg-[#15274d] px-[1rem] py-[0.5rem] rounded-tr-[10px]">Overview</div>
                    <div className="flex flex-col  bg-[#15274d]">
                        <span className="flex gap-4 items-center bg-[#15274d] px-[1rem] py-[0.2rem] "><IoMdArrowDropdown /> Reseller Management</span>
                        <ul>
                            <li>Saved Leads</li>
                            <li>Applications</li>
                            <li>Closed Loans</li>
                            <li>Conflicting Applications</li>
                            <li>Sales Team</li>
                            <li>Sales Team - Unassigned</li>
                            <li style={{borderBottom:"none"}}>Commissions</li>
                        </ul>
                    </div>
                </div>
            {/* <Slidebar/> */}
            <div className='mainContainer'>
                <div className="mt-[1rem] flex gap-2 items-end navBarContainer">
                    {
                        menuLists.map((data, index)=>{
                            return(
                                <NavLink to= {data.path} key={index}
                                style={({ isActive }) => ({
                                    color: isActive ? "white" : "rgb(21, 39, 77)", 
                                    backgroundColor: isActive ? "rgb(21, 39, 77)" : "#9a9b9c",
                                    padding: "0.2rem 1rem",
                                    borderRight: isActive ? "0px solid " : "1px solid #E8E8E8" ,
                                    fontWeight: isActive ? "600" : "500" ,
                                    height:"100%"
                                })}>
                                    {data.name}
                                </NavLink>
                            );
                        })
                    }
                </div>
                {/* <Header title="Applications"/> */}
                {/* <div className="mt-[1rem] flex gap-4 items-end mb-[1rem]">
                    {
                        menuu.map((menuList, index)=>{
                            return(
                                <NavLink key={index} to= {menuList.path} style={({ isActive }) => ({
                                    color: isActive ? "white" : "#262525", 
                                    backgroundColor: isActive ? "rgb(97, 108, 128)" : "transparent",
                                    borderRadius:"20px",
                                    padding: "0.2rem 1rem",
                                    border: isActive ? "0px solid " : "1px solid #E8E8E8" ,
                                })}>
                                    <span>{menuList.name}</span>
                                </NavLink>
                            );
                        })
                    }
                </div> */}
                <div className="flex flex-col gap-8 w-[95%] pt-[1rem] pb-[1rem]">
                        {/* Business */}
                        <div className="flex flex-col gap-4">
                            <div className="flex justify-between border-b-2 rounded-lg border-[#15274d]">
                                <h3 
                                className="text-[#303C56] text-[1.2rem] font-[500]">
                                    BUSINESS INFORMATION
                                </h3>
                                {/* <FiEdit2 /> */}
                                {/* <span>Mandatory fields in bold</span> */}
                            </div>
                            <div className="flex flex-col gap-2 justify-between">
                                <div className="flex justify-content gap-8 w-[100%]">
                                    <div className="flex flex-col gap-1 w-[100%]">
                                        <label className="text-[#616c80] text-[0.95rem] font-[500] px-[0.2rem]">Business Name</label>
                                        <input type="text" required placeholder="Legal Business Name" className="border  border-[#c8c5fa] h-[2.8rem] w-[100%] rounded-lg shadow-[0px 1px 2px 0px #1018280D] text-[#707070] bg-[rgb(57, 168, 97)] px-[1rem] py-[0.8rem] outline-none text-[1rem]"/>
                                    </div>
                                    <div className="flex flex-col gap-1 w-[100%]">
                                        <label className="text-[#616c80] text-[0.95rem] font-[500] px-[0.2rem]">Business DBA Name</label>
                                        <input type="text" required placeholder="Enter Business DBA Name" className="border  border-[#c8c5fa] h-[2.8rem] w-[100%] rounded-lg shadow-[0px 1px 2px 0px #1018280D] text-[#707070] bg-[rgb(57, 168, 97)] px-[1rem] py-[0.8rem] outline-none text-[1rem]"/>
                                    </div>
                                </div>
                                <div className="flex justify-content gap-8 w-[100%]">
                                    <div className="flex flex-col gap-1 w-[100%]">
                                        <label className="text-[#616c80] text-[0.95rem] font-[500] px-[0.2rem]">Business TAX ID (EIN)</label>
                                        <input type="text" required placeholder="Company TAX ID" className="border  border-[#c8c5fa] h-[2.8rem] w-[100%] rounded-lg shadow-[0px 1px 2px 0px #1018280D] text-[#707070] bg-[rgb(57, 168, 97)] px-[1rem] py-[0.8rem] outline-none text-[1rem]"/>
                                    </div>
                                    <div className="flex flex-col gap-1 w-[100%]">
                                        <label className="text-[#616c80] text-[0.95rem] font-[500] px-[0.2rem]">Email Address</label>
                                        <input type="email" required placeholder="Enter Email Address" className="border  border-[#c8c5fa] h-[2.8rem] w-[100%] rounded-lg shadow-[0px 1px 2px 0px #1018280D] text-[#707070] bg-[rgb(57, 168, 97)] px-[1rem] py-[0.8rem] outline-none text-[1rem]"/>
                                    </div>
                                </div>
                                <div className="flex justify-content gap-8 w-[100%]">
                                    <div className="flex flex-col gap-1 w-[100%]">
                                        <div className="flex justify-content gap-8 w-[100%]">
                                            <div className="flex flex-col gap-1 w-[100%]">
                                                <label className="text-[#616c80] text-[0.95rem] font-[500] px-[0.2rem]">Laon Amount</label>
                                                <input type="text" required placeholder="Enter Between 10,000 to 500,000" className="border  border-[#c8c5fa] h-[2.8rem] w-[100%] rounded-lg shadow-[0px 1px 2px 0px #1018280D] text-[#707070] bg-[rgb(57, 168, 97)] px-[1rem] py-[0.8rem] outline-none text-[1rem]"/>
                                            </div>
                                            <div className="flex flex-col gap-1 w-[100%]">
                                                <label className="text-[#616c80] text-[0.95rem] font-[500] px-[0.2rem]">Reason for Loan</label>
                                                <select required className="border border-[#c8c5fa] h-[2.8rem] w-[100%] rounded-lg shadow-[0px 1px 2px 0px #1018280D] text-[#707070] bg-[rgb(57, 168, 97)] px-[1rem] py-[0.2rem] outline-none text-[1rem]">
                                                    <option value="" disabled selected>Select reason</option>
                                                    <option value="cash-flow">Cash flow loan</option>
                                                </select>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="flex justify-content gap-8 w-[100%]">
                                            <div className="flex flex-col gap-1 w-[100%]">
                                                <label className="text-[#616c80] text-[0.95rem] font-[500] px-[0.2rem]">Payment Frequency</label>
                                                <select required className="border border-[#c8c5fa] h-[2.8rem] w-[100%] rounded-lg shadow-[0px 1px 2px 0px #1018280D] text-[#707070] bg-[rgb(57, 168, 97)] px-[1rem] py-[0.2rem] outline-none text-[1rem]">
                                                    <option value="" disabled selected>Select reason</option>
                                                    <option value="daily">Daily</option>
                                                    <option value="Weekly">Weekly</option>
                                                    <option value="By-Monthly">By-Monthly</option>
                                                    <option value="Monthly">Monthly</option>
                                                </select>
                                            </div>
                                            <div className="flex flex-col gap-1 w-[100%]">
                                                <label className="text-[#616c80] text-[0.95rem] font-[500] px-[0.2rem]">Loan Term</label>
                                                <select required className="border border-[#c8c5fa] h-[2.8rem] w-[100%] rounded-lg shadow-[0px 1px 2px 0px #1018280D] text-[#707070] bg-[rgb(57, 168, 97)] px-[1rem] py-[0.2rem] outline-none text-[1rem]">
                                                    <option value="" disabled selected>-Select one-</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                <div className="flex justify-content gap-8 w-[100%]">
                                    <div className="flex flex-col gap-1 w-[100%]">
                                        <label className="text-[#616c80] text-[0.95rem] font-[500] px-[0.2rem]">Loan Purpose</label>
                                        <textarea type="text" rows="4" required placeholder="Enter Phone number" className="border  border-[#c8c5fa] h-[2.8rem] w-[100%] rounded-lg shadow-[0px 1px 2px 0px #1018280D] text-[#707070] bg-[rgb(57, 168, 97)] px-[1rem] py-[0.8rem] outline-none text-[1rem]"/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4">
                            <div className="flex justify-between border-b-2 rounded-lg border-[#15274d]">
                                <h3 
                                className="text-[#303C56] text-[1.2rem] font-[500]">
                                    OTHER LOAN BALANCES
                                </h3>
                            </div>
                            <div className="flex gap-[2rem] ">
                                {/* <div className="flex justify-content gap-8 w-[100%]"> */}

                                <div className="flex flex-col gap-1 w-[80%]">
                                    <div className="flex justify-content gap-8 w-[100%]">
                                        <div className="flex flex-col gap-1 w-[100%]">
                                            <label className="text-[#616c80] text-[0.95rem] font-[500] px-[0.2rem]">Lender</label>
                                            <input type="text" required placeholder="" className="border  border-[#c8c5fa] h-[2.8rem] w-[100%] rounded-lg shadow-[0px 1px 2px 0px #1018280D] text-[#707070] bg-[rgb(57, 168, 97)] px-[1rem] py-[0.8rem] outline-none text-[1rem]"/>
                                        </div>
                                        <div className="flex flex-col gap-1 w-[100%]">
                                            <label className="text-[#616c80] text-[0.95rem] font-[500] px-[0.2rem]">Frequency</label>
                                            <input type="text" required placeholder="" className="border  border-[#c8c5fa] h-[2.8rem] w-[100%] rounded-lg shadow-[0px 1px 2px 0px #1018280D] text-[#707070] bg-[rgb(57, 168, 97)] px-[1rem] py-[0.8rem] outline-none text-[1rem]"/>
                                        </div>
                                        <div className="flex flex-col gap-1 w-[100%]">
                                            <label className="text-[#616c80] text-[0.95rem] font-[500] px-[0.2rem]">Balance</label>
                                            <input type="text" required placeholder="" className="border  border-[#c8c5fa] h-[2.8rem] w-[100%] rounded-lg shadow-[0px 1px 2px 0px #1018280D] text-[#707070] bg-[rgb(57, 168, 97)] px-[1rem] py-[0.8rem] outline-none text-[1rem]"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-1 ">
                                <label className="text-[#616c80] text-[0.95rem] font-[500] px-[0.2rem]">Payoff</label>
                                    <div className="flex gap-[3rem]">
                                        <input  type="checkbox" className="border border-[#c8c5fa] h-[1rem] w-[1.4rem] rounded-lg shadow-[0px 1px 2px 0px #1018280D] text-[#707070] bg-[rgb(57, 168, 97)]"/>
                                        <RxCross1 />
                                    </div>
                                </div>
                            </div>
                        </div>

                   
                </div>
            </div>
        </div>
        </>
    );
}