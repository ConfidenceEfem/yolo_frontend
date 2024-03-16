"use client"
import { montserrat } from "@/font/font";
import ButtonComp from "./global/button/ButtonComp";
import { useRouter } from "next/navigation"; 
import MenuIcon from '@mui/icons-material/Menu';
import Sidebar from "./Sidebar";
import { useState } from "react";

const Header = () => {

  const router = useRouter()

  const [open, setOpen] = useState(false)

  return (
    <div className="w-full relative top-0">
      {
        open?
      
      <Sidebar open={open} setOpen={setOpen}/> : null }
       <div className="w-full bg-whiteColor h-[90px] flex justify-center items-center shadow-outline fixed z-auto">
      <div className="w-[90%] flex justify-between items-center">
        <div
        className="cursor-pointer"
        onClick={()=>{
          router.push("/")
        }}
        >logo</div>
        <div className={`flex gap-[30px] text-[14px] font-[${montserrat.style.fontFamily}] items-center uppercase max-[800px]:hidden`}>
            <div className={`header-nav`}>Home</div>
            <div className={`header-nav`}>Properties</div>
            <div className={`header-nav`}>Agents</div>
            <div className={`header-nav`}>Blog In</div>
            {/* <div className="py-[8px] cursor-pointer px-[30px] bg-transparent rounded-[10px] text-[#001DDD] border-[#001DDD] border-[2px] hover:scale-[1.02] transition-all duration-100 text-[12px]">Log In</div> */}
            <ButtonComp text={"Log In"} buttonWidth="w-[185px]"/>
        </div>
        <div className="hidden max-[800px]:flex max-[800px]:cursor-pointer"  
        onClick={()=>{
          setOpen(true)
          console.log("hello click")
        }}
        >
          <MenuIcon sx={{color: "#6B9A52", fontSize:"35px"}}
        
          
          />
        </div>
      </div>
    </div>
    </div>
   
  );
};

export default Header;
