import React from "react";
import ScHP from "./../Components/schedule.png";
function RezervBG() {
  return (
    <div>
      <div className="absolute left-[50%] translate-x-[-50%] leading-10 text-[#023047] columns-1 pt-[60px] text-center">
        <h2  className=" font-bold text-[24px]">Hazırda reserv edilən avtomobil yoxdur</h2>
        <p className=" font-semibold text-[16px]">Sizin avtomobillər reserv edildikdə burada qeyd olunacaqdır</p>
      </div>
      <div className="absolute bottom-0 left-[50%] translate-x-[-50%]">
        <img src={ScHP} />
      </div>
    </div>
  );
}

export default RezervBG;
