import { montserrat } from "@/font/font"
import Image from "next/image"
import img from "@/image/img.png"
import ButtonComp from "../global/button/ButtonComp"

const HeroComp = () => {
    return (
        <div
        className={`w-full flex bg-[#ADD8E6] h-[85vh] justify-center items-center font-[${montserrat.style.fontFamily}]`}
        >
            <div
            className="w-[90%]
            flex justify-between items-center"
            >
                <div className="flex flex-col gap-[40px] w-[500px] ">
                    <div className={`flex gap-[10px] text-[35px] font-semibold tracking-[0.5px] font-[${montserrat.style.fontFamily}] items-center`}>
                    <div className="text-[yellow]">Become a</div>
                    <div className="flex gap-[10px] flex-col items-center">
                        <div className="border-[3px] border-[#FCF200] py-[5px] px-[10px] rounded-[5px] text-blue">YOLO</div>
                        <div className="text-[8px]">YOUNG LAND OWNERS</div>
                    </div>
                    </div>
                    <div className="text-[16px] font-normal">
                    Financial Freedom is not a secret but a system that can be built. Create a Free Account now to Start building building your System for Financial Freedom
  
                    </div>
                   
                    <ButtonComp text={"Get Started"} routeLink="get-started"/>
                </div>
                <div>
                    <Image src={img} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default HeroComp