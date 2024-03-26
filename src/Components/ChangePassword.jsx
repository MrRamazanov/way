import React from "react";
import { useState } from "react";
import "./styles.css";
function ChangePassword() {
  const [isFocused, setIsFocused] = useState(false);
  const [isFocused2, setIsFocused2] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [isValid2, setIsValid2] = useState(false);
  return (
    <div className="w-[740px] rounded-lg bg-[#FFFFFF] border text-center py-[60px]">
      <h2 className=" font-semibold text-4xl ">Yeni Şifrə</h2>
      <form action="#">
        <div className="relative w-[534px] mx-auto my-[60px]">
          <span></span>
          <input
            type="text"
            required
            className={`outline-none ${
              isFocused || isValid ? "top-minus-5" : ""
            } border-2 rounded-xl border-grey w-full py-[15px]`}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onChange={(e) => setIsValid(e.target.value.trim() !== "")}
          />
          <label
            className={` ${
              isFocused || isValid ? "top-minus-5" : ""
            } bg-white absolute left-[20px] top-[50%] translate-y-[-50%] duration-500 px-[5px]`}
          >
            Şifrə
          </label>
        </div>
        {/* ---------------------------------------------- */}
        <div className="relative w-[534px] mx-auto my-[60px]">
          <span></span>
          <input
            type="password"
            required
            className={`outline-none ${
              isFocused2 || isValid2 ? "top-minus-5" : ""
            } border-2 rounded-xl border-grey w-full py-[15px]`}
            onFocus={() => setIsFocused2(true)}
            onBlur={() => setIsFocused2(false)}
            onChange={(e) => setIsValid(e.target.value.trim() !== "")}
          />
          <label
            className={` ${
              isFocused2 || isValid2 ? "top-minus-5" : ""
            } bg-white absolute left-[20px] top-[50%] translate-y-[-50%] duration-500 px-[5px]`}
          >
            Təkrar Şifrə
          </label>
        </div>
        <button className="bg-[#023047] text-white py-4 w-[534px] rounded-xl">Təsdiqlə</button>
      </form>
    </div>
  );
}

export default ChangePassword;
