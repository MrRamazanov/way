import React, { useState } from "react";
import PromoKod from "./PromoKod";

function PromoKodlarim() {
  let [kod, setKod] = useState(0);
  const [data, setData] = useState([]);
  return (
    <div className=" mx-[32px]">
      <h1 className="text-[50px] font-bold text-blue-950 ">Promokodlarim</h1>
      <div>
        {data.length > 0
          ? data?.map((item) => {
              kod += 1;
              if (kod % 2 == 0) {
                return (
                  <div className="bg-gray-100">
                    <PromoKod key={kod} price={item.price} promo={item.promo} />
                  </div>
                );
              } else {
                return (
                  <PromoKod key={kod} price={item.price} promo={item.promo} />
                );
              }
            })
          : "Promokod yoxdur"}
      </div>
    </div>
  );
}

export default PromoKodlarim;
