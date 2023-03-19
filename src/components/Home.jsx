import React from 'react'
import ParticlesAPP from '../assets/Particles'

// ############################## Add background to the hero text
const Home = () => {
  return (
    <div className='w-screen min-h-screen px-40 flex flex-col justify-around items-center'>
      <div className='hero--section relative particles flex flex-col items-left justify-center px-[5rem] py-[2rem]'>
        {/* <ParticlesAPP className='-z-10' /> */}
        <h2 className='text-xl opacity-70 z-10'>&#123; Hello World! &#125;</h2>
        <h1 className='font--highlight z-10 text-[6rem] text-left leading-[90%] font-extrabold uppercase animate-'>
          Vinay Kishore
        </h1>

        <p className='text-xl z-10 w-[60%] opacity-70'>
          I Describe myself as a Technophile, Neophile and a creative
          <h2 className='font-mono text-2xl opacity-100 inline font-bold'>
            {' '}
            developer
          </h2>
          . I like Tech, Automobile and Innovations.
        </p>
      </div>
      {/* <ParticlesAPP /> */}
    </div>
  )
}

export default Home

//
