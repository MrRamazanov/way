import React from "react";
import { useState } from "react";
import Sikayet from "./Sikayet";
function Sikayetlerim() {
  let [kod, setKod] = useState(0);
  const [data, setData] = useState([
    
  ]);
  return (
    <div className=" mx-[32px]">
      <h1 className="text-[54px] font-bold text-blue-950 ">Şikayətlərim</h1>
      <div>
        {data.length > 0
          ? data?.map((item) => {
              kod+=1
              if (kod % 2 == 0) {
                return (
                  <div key={item.id} className="bg-gray-100">
                  <Sikayet
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    surname={item.surname}
                    day={item.day}
                    time={item.time}
                    carBrand={item.carBrand}
                    carModel={item.carModel}
                    year={item.year}
                    price={item.price}
                    status={item.status}
                    color={item.color}
                  /></div>
                );
              } else {
                return (
                  <Sikayet
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    surname={item.surname}
                    day={item.day}
                    time={item.time}
                    carBrand={item.carBrand}
                    carModel={item.carModel}
                    year={item.year}
                    price={item.price}
                    status={item.status}
                    color={item.color}
                  />
                );
              }
            })
          : "Hec bir sikayet yoxdur"}
      </div>
    </div>
  );
}

export default Sikayetlerim;
