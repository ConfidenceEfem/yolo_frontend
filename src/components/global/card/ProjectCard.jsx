"use client";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import ApartmentIcon from '@mui/icons-material/Apartment';
import { useRouter } from "next/navigation";

const ProjectCard = () => {

    const router = useRouter()

    const projectDatas = [
        {
            id: 1,
            icon: <AcUnitIcon sx={{ fontSize: "80px",color:"#203B82" }}/>,
            title: "Bankable Projects",
            subTitle:"Projects",
            routerLink:"/projects",
        },
        {
            id: 2,
            icon: <ApartmentIcon sx={{ fontSize: "80px",color:"#203B82" }}/>,
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
                className="w-[280px] h-[320px] gap-[15px] rounded-[10px] border-2 border-blue shadow-[rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;] flex flex-col items-center justify-center  cursor-pointer hover:bg-slate-100 transition-all duration-500 delay-300"
                onClick={()=>{
                    router.push(props.routerLink)
                }}
                >
          <div className="text-blue">
           {props.icon}
          </div>
          <div className="text-[20px] font-semibold gap-[10px] text-center">
            <div className="text-[20px] font-semibold text-yellowColor">{props.title}</div>
            <div className="text-[16px]  font-normal text-blue">{props.subTitle}</div>
          </div>
        </div>
            ))
        }
        </>
        
    )
}
export default ProjectCard