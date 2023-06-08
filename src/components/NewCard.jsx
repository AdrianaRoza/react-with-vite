import React, { useState } from 'react'

const NewCard = () =>{ 

return(
    <div
      className="bg-white h-screen flex justify-center items-center gap-x-16
        text-rose-500">

      <div className="w-[300px] h-[420px] bg-transparent 
          cursor-pointer group perspective">
        
        <div className='relative preserve-3d 
          group-hover:my-rotate-y-180 w-full h-full duration-1000'>
          
          <div className='text-center flex flex-col items-center justify-center
          absolute backface-hidden border-2 w-full h-full bg-rose-100'>
            <h1>Frente da carta</h1>

          </div>
          
          <div className='absolute my-rotate-y-180 backface-hidden 
            w-full h-full bg-rose-100'>
            
          <div className='text-center flex flex-col items-center 
            justify-center h-full'>
              <h1>verso</h1>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewCard