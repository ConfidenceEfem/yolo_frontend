"use client";
import ProjectCard from "@/components/global/card/ProjectCard";
import AcUnitIcon from "@mui/icons-material/AcUnit";
const GetStarted = () => {
  return (
    <div
      className={`w-full flex bg-[#ADD8E6] h-[85vh] justify-center items-center`}
    >
      <div className="flex items-center gap-[30px]">
        <ProjectCard />
      </div>
    </div>
  );
};

export default GetStarted;
