import React from 'react'

function PromoKod(props) {
  return (
    <div className=" w-[456px] font-sans px-[40px] py-[30px] text-[26px] text-gray-500 ">
      <div className="flex justify-between items-center">
        <p className=' font-bold text-green-600'>+{props.price} AZN</p>
        <p>{props.promo}</p>
        
      </div>
    </div>
  )
}

export default PromoKod