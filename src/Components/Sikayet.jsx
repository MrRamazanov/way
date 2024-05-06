import React from "react";

function Sikayet(props) {
  return (
    <div className=" w-full font-sans px-[40px] py-[30px] text-[18px]  text-gray-700 ">
      <div className="flex justify-between items-center">
        <p>{props.id}</p>
        <p>{props.name}</p>
        <p>{props.surname}</p>
        <p>{props.day}</p>
        <p>{props.time}</p>
        <p>{props.carBrand}</p>
        <p>{props.carModel}</p>
        <p>{props.year}</p>
        <p className="font-bold">{props.price}</p>
        <p
          className={`text-white font-bold py-[20px] text-center w-[180px] rounded-xl ${props.color}`}
        >
          {props.status}
        </p>
      </div>
    </div>
  );
}

export default Sikayet;
