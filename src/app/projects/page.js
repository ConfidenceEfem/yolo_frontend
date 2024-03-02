import ButtonComp from "@/components/global/button/ButtonComp";
import Image from "next/image";
import img from "../../image/img.png";

const Projects = () => {
  const projectData = [
    {
      id: 1,
      image: img,
      projectName: "NOVA Z",
      projectLocation: "EPE Lagos",
      projectLandMass: "300 & 600 SQM",
      // projectDetail:"",
    },
    {
      id: 2,
      image: img,
      projectName: "NOVA Z",
      projectLocation: "EPE Lagos",
      projectLandMass: "300 & 600 SQM",
      // projectDetail:"",
    },
    {
      id: 3,
      image: img,
      projectName: "NOVA Z",
      projectLocation: "EPE Lagos",
      projectLandMass: "300 & 600 SQM",
      // projectDetail:"",
    },
  ];

  return (
    <div
      className={`w-full flex bg-[#ADD8E6] pb-[30px] justify-center items-center pt-[50px]`}
    >
      <div className="flex items-center gap-[50px] flex-col">
        <div className="w-[470px] text-center flex flex-col gap-[35px] mb-[20px]">
          <div className="text-[30px] font-bold  tracking-normal leading-[45px] ">
            Unlock Your Investment Potential with Our Bankable Real Estate
            Project
          </div>
          <div className="text-[14px] tracking-[1px]">
            Secure Returns, Premium Properties, and Exceptional Service
          </div>
          <div className="flex justify-center">
            <ButtonComp text={"Download Brochure"} buttonWidth="w-[185px]" />
          </div>
        </div>
        <div className="grid w-full grid-cols-3 gap-[35px]">
          {projectData?.map((props) => (
            <div
              key={props?.id}
              className="w-full overflow-hidden gap-[15px] flex flex-col"
            >
              <Image
                className="w-full h-[150px] rounded-lg "
                src={props.image}
              />
              <div className="gap-[5px] flex flex-col">
                <div className="text-[20px] font-semibold text-[white]">
                  {props.projectName}
                </div>
                <div className="text-[13px] font-light">
                  {props.projectLocation}
                </div>
                <div className="text-[13px] font-light">
                  {props.projectLandMass}
                </div>
              </div>
              <div>
                <ButtonComp text={"View"} routeLink={"/projects/i"} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
