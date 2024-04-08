import React from 'react'
import { useState } from 'react'
import RezervBG from './RezervBG'
function Rezerv() {
    const [dates, setDates] = useState([])
  return (
    <div className='h-full relative' >
    <div className='pt-[30px] pl-[60px]'>
      <h1 className='font-bold text-[36px] text-[#023047]'>Reserv Təqvimi</h1>
    <div>
        {(dates.length > 0) ? dates.map( item => {`<div></div>`}) : <RezervBG/>}
    </div>
    </div>
    </div>
  )
}

export default Rezerv