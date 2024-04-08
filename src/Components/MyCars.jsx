import { FaPlus } from "react-icons/fa";
import { useState } from "react";
import MyCarsBG from "./MyCarsBG";
function MyCars() {
    const [cars, setCars] = useState([])
  return (
    <div className="relative h-full">
      <div className=" flex justify-between w-full items-center p-[30px]">
        <h1 className=" font-semibold text-[36px] text-[#023047] font-sans">
          Avtomobillərim
        </h1>
        <button 
        className="font-semibold font-sans text-[#023047] flex items-center p-[20px] bg-[#EDEFFD] rounded-[10px]">
          <FaPlus className="text-[18px]" />
          <span className="text-[15px] px-[10px]">Yeni Avtomobil</span>
        </button>
      </div>
      {/* ---------------------------- */}
      <div>
        {
            (cars.length > 0) ? cars.map(item => {`<div></div>`}) : <MyCarsBG/>
        }
      </div>
    </div>
  );
}

export default MyCars;
