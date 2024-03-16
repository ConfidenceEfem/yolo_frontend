"use client";

import Image from "next/image";
import img from "../../../image/img.png";
// import EditLocationIcon from "@mui/icons-material/EditLocation";
import LocationOnIcon from "@mui/icons-material/LocationOn";
const ProjectDetail = ({ params }) => {
  return (
    <div
      className={`w-full h-[85vh] flex bg-whiteColor pb-[30px] justify-center items-center pt-[150px] max-[800px]:h-full`}
    >
      <div className="flex items-center gap-[40px] justify-between w-[90%] max-[800px]:flex-col">
        <div className="flex gap-[35px] flex-col w-[500px] max-[800px]:w-full max-[800px]:items-center max-[800px]:text-center">
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
            <div className="text-blue text-[30px]">
              <LocationOnIcon />
            </div>
            <div className="text-[25px] font-bold">Ketu Ekpe</div>
          </div>
          <div className="flex flex-col items-center gap-3 w-[230px] bg-blue py-[14px] rounded-[5px]">
            <div className="font-bold tracking-wider text-[19px] text-white">
              300 . 600
            </div>
            <div className="text-[13px] text-whiteColor font-medium">
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
