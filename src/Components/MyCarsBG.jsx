import React from "react";
import FrameP from "./../Components/Frame.png";
import VectorP from "./../Components/Vector.png";

function MyCarsBG() {
  return (
    <div>
      <div className="absolute left-[50%] translate-x-[-50%] text-center pt-[60px] columns-1 text-[#023047] leading-10">
        <h2 className=" font-bold text-[24px]">Hazırda Avtomobiliniz yoxdur</h2>
        <p className=" font-semibold text-[16px]">Avtomobillərini platformamıza əlavə et, əlavə gəlir qazan 🤑</p>
      </div>
      <div className="absolute right-[7%] ">
        <img src={VectorP} className="w-[430px]" />
      </div>
      <div className="absolute top-[100%] left-[50%] translate-x-[-50%] ">
        <img src={FrameP} className="w-[700px]" />
      </div>
    </div>
  );
}

export default MyCarsBG;
