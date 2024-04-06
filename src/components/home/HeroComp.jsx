import { montserrat } from "@/font/font"
import Image from "next/image"
import img from "@/image/img.png"
import ButtonComp from "../global/button/ButtonComp"

const HeroComp = () => {
    return (
        <div
        className={`w-full flex pt-[130px] bg-whiteColor h-[85vh] justify-center items-center font-[${montserrat.style.fontFamily}] max-[800px]:h-full max-[800px]:pb-[40px]`}
        >
            <div
            className="w-[90%]
            flex justify-between items-center max-[800px]:flex-col max-[800px]:justify-start max-[800px]:gap-[50px]"
            >
                <div className="flex flex-col gap-[40px] w-[500px] max-[800px]:items-center max-[800px]:w-full">
                    <div className={`flex gap-[10px] text-[35px] font-semibold tracking-[0.5px] font-[${montserrat.style.fontFamily}] items-center max-[400px]:text-[27px]`}>
                    <div className="">Become a</div>
                    <div className="flex gap-[10px] flex-col items-center">
                        <div className="border-[3px] border-yellowColor py-[5px] px-[10px] rounded-[5px] text-blue">YOLO</div>
                        <div className="text-[8px] text-blue">YOUNG LAND OWNERS</div>
                    </div>
                    </div>
                    <div className="text-[16px] font-normal max-[800px]:text-center max-[800px]:text-[14px]">
                    Financial Freedom is not a secret but a system that can be built. Create a Free Account now to Start building building your System for Financial Freedom
  
                    </div>
                   
                    <ButtonComp text={"Get Started"} routeLink="get-started" buttonWidth="w-[185px]"/>
                </div>
                <div>
                    <Image src={img} alt="" className="max-[800px]:rounded-[10px]"/>
                </div>
            </div>
        </div>
    )
}

export default HeroComp