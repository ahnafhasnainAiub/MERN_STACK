import React from 'react'
import { GoArrowUpRight } from "react-icons/go";


function LandingPage() {
  return (
    <div className='w-full h-screen bg-zinc-900 pt-1'>
      <div className='textstructure mt-52 px-20'>
       {["We Create","Eye Opening","Presentations"].map((item, index)=> {
        return ( 
          <div className="masker">
                <div className="w-fit flex items-end overflow-hidden">
                  {index ===1 && (
                    <div className='mr-[.1vw] w-[7.5vw] rounded-md h-[5.4vw] relative -top[1.2vw] bg-green-500'></div>
                  )}
                   <h1 className="uppercase text-[7.3vw] h-full leading-[6.1vw] fon-['Founders_Grotesk_X-Condensed'] font-bold tracking-tight">
                     {item}
                   </h1>
                </div>
           </div>
         );
       })}
          
      </div>
      <div className="border-t-2 border-zinc-700 mt-20 flex justify-between items-center py-5 px-20">
        {["For Public and private companies",
          "From the first pitch to IPO",
         ].map((item, index)=>(
           <p className="text-md font-light tracking-tighter leading-none">{item}</p>
         ))}
          <div className='start flex items-center gap-5'>
              <div className="px-5 py-2 border-[2px] border-zinc-500 font-light text-sm capitalize rounded-full">
                Start The project
              </div>
              <div className="w-6 h-6 flex items-center justify-center border-[1px] border-zinc-400 font-light uppercase text-md rounded-full">
                <GoArrowUpRight/>
              </div>
          </div>  
      </div>    
    </div>
  )
}

export default LandingPage