"use client";

import Image from "next/image";
import img from "../../../image/img.png";
// import EditLocationIcon from "@mui/icons-material/EditLocation";
const ProjectDetail = ({ params }) => {
  return (
    <div
      className={`w-full h-[85vh] flex bg-[#ADD8E6] pb-[30px] justify-center items-center pt-[50px]`}
    >
      <div className="flex items-center gap-[40px] justify-between w-[90%]">
        <div className="flex gap-[35px] flex-col w-[500px]">
          <div className="text-[30px] font-semibold">Nova X</div>
          <div>
            <div className="font-semibold text-[17px] mb-[8px]">
              A Developement By Propup
            </div>
            <div className="text-[15px] tracking-normal leading-[25px]">
              Bringing you a slice of paradise, with amazing facilities; gym,
              swimming pool, golf simulator and private villas.
            </div>
          </div>
          <div className="flex flex-row items-center gap-5">
            <div className="text-yellow text-[30px]">
              {/* <EditLocationIcon /> */}icon
            </div>
            <div className="text-[25px] font-bold">Ketu Ekpe</div>
          </div>
          <div className="flex flex-col items-center gap-3 w-[230px] bg-blue py-[14px] rounded-[5px]">
            <div className="font-bold tracking-wider text-[19px] text-white">
              300 . 600
            </div>
            <div className="text-[13px] text-yellow font-medium">
              SQUARE METERS
            </div>
          </div>
        </div>
        <div>
          <Image src={img} alt="detail-property-image" />
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
