import React from "react";
import { useState } from "react";
import './styles.css'
function NewPassword() {
  const [isFocused, setIsFocused] = useState(false);
  const [isValid, setIsValid] = useState(false);
  return (
    <div className="w-[740px] rounded-lg bg-[#FFFFFF] border text-center py-[60px]">
      <h2 className=" font-semibold text-4xl pb-[30px]">Şifrəni Yenilə</h2>

      <form action="#">
        <div className="relative w-[534px] mx-auto my-[60px]">
          
          <input className={`outline-none ${isFocused || isValid ? 'top-minus-5' : ''} border-2 rounded-xl border-grey w-full py-[15px]`}  type="email" required 
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChange={(e) => setIsValid(e.target.value.trim() !== '')}/>
          <label className={` ${isFocused || isValid ? 'top-minus-5' : ''} bg-white absolute left-[20px] top-[50%] translate-y-[-50%] duration-500 px-[5px]`}>E-mail</label>
          
        </div>
        <button className="bg-[#023047] text-white py-4 w-[534px] rounded-xl">Gönder</button>
      </form>
    </div>
  );
}

export default NewPassword;
