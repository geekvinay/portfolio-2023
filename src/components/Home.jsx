import React from 'react'

// ############################## Add background to the hero text
const Home = () => {
  return (
    <div className='w-screen min-h-screen px-40 flex flex-col justify-around items-center'>
      <div className='hero--section particles-js flex flex-col items-left justify-center px-[5rem] py-[2rem]'>
        <h2 className='text-xl opacity-70'>Computer Science Student</h2>
        <h1 className='font--highlight text-[10rem] leading-[90%] font-extrabold uppercase'>
          Vinay{' '}
        </h1>
        <h1 className='font--highlight text-[10rem] leading-[90%] font-extrabold uppercase'>
          Kishore
        </h1>
        <p className='text-xl w-[60%] opacity-70'>
          I Describe myself as a Technophile, Neophile and a creative
          <span className='text-cyan-300 font-semibold opacity-100'>
            {' '}
            web developer
          </span>
          . I like Tech, Automobile and Innovations.
        </p>
      </div>

      <div className='h-10rem'>
        {/* This class doesn't do anything much but space */}
      </div>
    </div>
  )
}

export default Home
