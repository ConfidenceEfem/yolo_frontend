"use client"

import { useRouter } from 'next/navigation'
 
 const ButtonComp = ({text,routeLink,buttonWidth}) => {

    const router = useRouter()

    return (
        <div   className={`${buttonWidth} flex justify-center items-center h-[50px] text-[15px] font-medium bg-blue text-whiteColor rounded-[5px] cursor-pointer`}
        onClick={()=>{
            router.push(routeLink)
        }}
        >{text}</div>
    )
}

export default ButtonComp

