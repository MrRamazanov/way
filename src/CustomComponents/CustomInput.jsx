import React from 'react'

const CustomInput = ({ inputType, topName, onChange, onBlur, onFocus, placeholder, isFocus, value, name }) => {
    return (
        <div className="relative">
            <div className='absolute top-0'>{topName}</div>
            <input
                type={inputType}
                className="border border-1 border-[#B2BCCA] text-[14px] rounded-[10px] outline-none w-full px-[20px] py-[10px]"
                value={value}
                onFocus={onFocus}
                onChange={onChange}
                onBlur={onBlur}
                placeholder={placeholder}
                required
            />
            {isFocus && value && (
                <span className="absolute top-[-16px] bg-white text-[#828282] p-[5px] text-[14px] left-[20px]">{name}</span>
            )}
        </div>
    )
}

export default CustomInput