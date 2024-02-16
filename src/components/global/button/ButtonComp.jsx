"use client"

import { useRouter } from 'next/navigation'
 
 const ButtonComp = ({text,routeLink}) => {

    const router = useRouter()

    return (
        <div   className="w-[185px] flex justify-center items-center h-[50px] text-[15px] font-medium bg-blue text-yellow rounded-[5px] cursor-pointer"
        onClick={()=>{
            router.push(routeLink)
        }}
        >{text}</div>
    )
}

export default ButtonComp

