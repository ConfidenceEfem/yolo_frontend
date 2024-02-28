"use client"
import { montserrat } from "@/font/font";
import ButtonComp from "./global/button/ButtonComp";
import { useRouter } from "next/navigation"; 


const Header = () => {

  const router = useRouter()

  return (
    <div className="w-full  h-[90px] flex justify-center items-center">
      <div className="w-[90%] flex justify-between items-center">
        <div
        className="cursor-pointer"
        onClick={()=>{
          router.push("/")
        }}
        >logo</div>
        <div className={`flex gap-[30px] text-[14px] font-[${montserrat.style.fontFamily}] items-center uppercase`}>
            <div className={`header-nav`}>Home</div>
            <div className={`header-nav`}>Properties</div>
            <div className={`header-nav`}>Agents</div>
            <div className={`header-nav`}>Blog In</div>
            {/* <div className="py-[8px] cursor-pointer px-[30px] bg-transparent rounded-[10px] text-[#001DDD] border-[#001DDD] border-[2px] hover:scale-[1.02] transition-all duration-100 text-[12px]">Log In</div> */}
            <ButtonComp text={"Log In"} buttonWidth="w-[185px]"/>
        </div>
      </div>
    </div>
  );
};

export default Header;
