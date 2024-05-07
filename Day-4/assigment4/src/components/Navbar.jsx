import React from 'react'

function Navbar() {
  return (
    <div className='w-[100%] flex justify-between items-center bg-white py-6 px-20'>
        <div className='flex justify-center items-center gap-2'>
            {/* <img src="https://flowbite.com/docs/images/logo.svg" alt="logo" /> */}
            <h1 className='text-2xl font-semibold'>HootSuite 🦉</h1>
        <div className='hidden cursor-pointer justify-center items-center gap-6 text-[1.1rem] font-semibold lg:flex xl:flex  2xl:flex ml-10'>
          <h1>platform</h1>
          <h1>Plans</h1>
          <h1>Enterprise</h1>
          <h1>Resources</h1>
          <h1>Education</h1>
        </div>
        </div> 


        <div className='flex gap-4'>  
            <button>Contact us</button>  
            <button>Log In</button>
        <button
        type="button"
        className=" bg-green-700 px-5 py-3 text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
      >
        Sign Up
      </button>
        </div>
    </div>
  )
}

export default Navbar