import React from 'react'
function Card() {
   
  return (
    <div className='card flex p-20 justify-center items-center flex-wrap gap-20'>
    <div className='flex flex-col items-center justify-center gap-2'>
      <h1 className=' text-[6rem]'>🚀</h1>
      <h1 className='font-bold text-xl'>2,500</h1>
      <p className='font-bold text-gray-400'>enterprise organizations successfully launched</p>
    </div>

    <div className='flex flex-col items-center justify-center gap-2'>
      <h1 className=' text-[6rem]'>📝</h1>
      <h1 className='font-bold text-xl'>45,500</h1>
      <p className='font-bold text-gray-400'>enterprise organizations successfully launched</p>
    </div>

    <div className='flex flex-col items-center justify-center gap-2'>
      <h1 className=' text-[6rem]'>👬</h1>
      <h1 className='font-bold text-xl'>200,500+</h1>
      <p className='font-bold text-gray-400'>enterprise organizations successfully launched</p>
    </div>
    </div>
  )
}

export default Card