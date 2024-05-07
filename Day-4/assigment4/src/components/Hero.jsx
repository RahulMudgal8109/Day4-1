import React from 'react'

function Hero() {
  return (
    <div className='w-[100%] bg-blue-950 flex justify-center items-center flex-col gap-6 text-white py-20'>
        <h1 className='text-6xl font-extrabold'>See value from social sooner</h1>
        <p className='w-[40%] text-center text-2xl text-gray-400'>Our Training and strategic services have helped thousands of organizations succed on social</p>
        <button className='bg-green-700 py-2 px-4'>Request a Demo</button>
    </div>
  )
}

export default Hero