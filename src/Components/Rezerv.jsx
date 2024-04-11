import React from "react";
import { useState } from "react";
import RezervBG from "./RezervBG";
function Rezerv() {
  const [dates, setDates] = useState([]);
  return (
    <>
      {/* <div className="h-full relative">
        <div className="pt-[30px] pl-[60px]">
          <h1 className="font-bold text-[36px] text-[#023047]">
            Reserv Təqvimi
          </h1>
          <div>
            {dates.length > 0 ? (
              dates.map((item) => {
                `<div></div>`;
              })
            ) : (
              <RezervBG />
            )}
          </div>
        </div>
      </div> */}

      {/* Aşağıdakını yuxarıdakı ilə müqayisə edərsən */}

      {/* aşağıda pl və pt istifadə etmisən flex box öyrən hər dəfə margin, absolute, padding istifadə etmə, dəyişiklik edirəm sadecə resev hissəsini düzəldirəm digərlərini özün edərsən
          padding verirsənsə çalış böyük ekranlar üçün hər tərəfə uyuğun şəkildə payla sağa verib sola verməməzlik eləmə edirsənsə marginlə et
      */}
      <div className="flex flex-col items-center justify-center min:h-[100vh] h-[100%] w-[100%] bg-[#EDEFFD]">
        <div className="flex flex-col justify-start sm:items-start items-center h-[90%] sm:w-[80%] w-[95%] overflow-y-auto bg-[#FFF] rounded-[12px]">
          <h1 className="font-bold sm:text-[36px] text-[24px] text-[#023047] mt-[5vh] sm:ml-[5vh]">Reserv Təqvimi</h1>
          <div className="flex flex-col justify-center items-center w-[100%]">
            {dates.length > 0 ? (
              dates.map((item) => {
                `<div></div>`;
              })
            ) : (
              <RezervBG />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Rezerv;
