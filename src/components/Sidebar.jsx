import { Modal } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';


const Sidebar = ({open, setOpen}) => {

    const textStyling = "w-full py-[15px] text-center bg-whiteColor text-[green] rounded-[5px] font-medium text-[14px]"

    console.log("hllo its open", open)
    return(
        <Modal open={true} sx={{backgroundColor:"#6B9A52", opacity:"1", display:"flex", justifyContent:"center"}}>
              <div className="relative  w-[90%] h-full  flex items-end pt-[30px] flex-col gap-[30px]">
                <div className="cursor-pointer"
                onClick={()=>{
                    setOpen(false)
                }}
                >
                <CloseIcon sx={{color: "white"}}/>
                </div>
                <div className="w-full flex flex-col gap-[15px]">
                    <div className={`${textStyling}`} onClick={()=>{
                    setOpen(false)
                }}>Home</div>
                    <div className={`${textStyling}`} onClick={()=>{
                    setOpen(false)
                }}>About</div>
                    <div className={`${textStyling}`} onClick={()=>{
                    setOpen(false)
                }}>Contact</div>
                    <div className={`${textStyling}`} onClick={()=>{
                    setOpen(false)
                }}>Project</div>
                </div>
              </div>
        </Modal>
      
    )
}

export default Sidebar