import React from 'react'

function Marquee() {
  return (
    <div className='w-full py-20 rounded-2xl bg-[#004D43]'>
      <div className='text border-t-2 border-b-2 border-zinc-300 flex gap-10 overflow-hidden whitespace-nowrap'>
        <h1 className='text-[15vw] leading-none fon-["Founders_Grotesk_X-Condensed"]  uppercase tracking-tight  font-semibold'>Hi Ahnaf</h1>
        <h1 className='text-[15vw] leading-none fon-["Founders_Grotesk_X-Condensed"] uppercase tracking-tight font-semibold '>Hi Ahnaf</h1>
      </div>
    </div>
  )
}

export default Marquee