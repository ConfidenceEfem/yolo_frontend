"use client";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import ApartmentIcon from '@mui/icons-material/Apartment';
import { useRouter } from "next/navigation";

const ProjectCard = () => {

    const router = useRouter()

    const projectDatas = [
        {
            id: 1,
            icon: <AcUnitIcon sx={{ fontSize: "80px",color:"blue" }}/>,
            title: "Bankable Projects",
            subTitle:"Projects",
            routerLink:"/projects",
        },
        {
            id: 2,
            icon: <ApartmentIcon sx={{ fontSize: "80px",color:"blue" }}/>,
            title: "Apartment Projects",
            subTitle:"Houses",
            routerLink:"/projects",
        },
    ]

    return (
        <>
        {
            projectDatas?.map((props)=>(
                <div 
                key={props?.id}
                className="bg-[white] w-[280px] h-[320px] gap-[15px] rounded-[10px] flex flex-col items-center justify-center cursor-pointer hover:bg-slate-100 transition-all duration-500 delay-300"
                onClick={()=>{
                    router.push(props.routerLink)
                }}
                >
          <div>
           {props.icon}
          </div>
          <div className="text-[20px] font-semibold gap-[10px] text-center">
            <div className="text-[20px] font-semibold">{props.title}</div>
            <div className="text-[16px]  font-normal">{props.subTitle}</div>
          </div>
        </div>
            ))
        }
        </>
        
    )
}
export default ProjectCard