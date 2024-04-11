import React from "react";
import ScHP from "./../Components/schedule.png";
function RezervBG() {
  return (
    <>
      {/* <div>
        <div className="absolute left-[50%] translate-x-[-50%] leading-10 text-[#023047] columns-1 pt-[60px] text-center">
          <h2 className=" font-bold text-[24px]">
            Hazırda reserv edilən avtomobil yoxdur
          </h2>
          <p className=" font-semibold text-[16px]">
            Sizin avtomobillər reserv edildikdə burada qeyd olunacaqdır
          </p>
        </div>
        <div className="absolute bottom-0 left-[50%] translate-x-[-50%]">
          <img src={ScHP} />
        </div>
      </div> */}

      {/* Aşağıdakını yuxarıdakı ilə müqayisə edib digər hissələrində də düzəliş edərsən */}

      <div className="flex flex-col justify-center items-center mt-[5vh] sm:w-[100%] w-[90%]">
        <div className="text-[#023047] text-center">
          <h2 className="font-bold sm:text-[24px] text-[16px]">
            Hazırda reserv edilən avtomobil yoxdur
          </h2>
          <p className="font-semibold sm:text-[12px] text-[10px] mt-[5px]">
            Sizin avtomobillər reserv edildikdə burada qeyd olunacaqdır
          </p>
        </div>
        <img
          src={ScHP}
          className="sm:h-[60vh] sm:w-[60vw] h-[100%] w-[95%] object-contain mt-[10px]"
          alt=""
        />
      </div>
    </>
  );
}

export default RezervBG;
