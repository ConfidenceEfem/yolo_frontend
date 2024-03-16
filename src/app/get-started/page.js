"use client";
import ProjectCard from "@/components/global/card/ProjectCard";
import AcUnitIcon from "@mui/icons-material/AcUnit";
const GetStarted = () => {
  return (
    <div
      className={`w-full flex bg-whiteColor h-[85vh] pt-[130px] justify-center items-center max-[800px]:h-full pb-[40px] `}
    >
      <div className="flex items-center gap-[30px] max-[800px]:flex-wrap max-[650px]:w-full max-[650px]:flex-col">
        <ProjectCard />
      </div>
    </div>
  );
};

export default GetStarted;
