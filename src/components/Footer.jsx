import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='w-16 h-screen absolute right-0 top-0 bottom-0 pt-8'>
      <ul className='flex flex-col justify-between items-center justify-end h-full'>
        <li className=''>
          <MyLink path='' pathName='LinkedIn'></MyLink>
        </li>
        <li className=''>
          <MyLink path='/about' pathName='Github'></MyLink>
        </li>
        <li className=''>
          <MyLink path='/about' pathName='Twitter'></MyLink>
        </li>
        <div className='h-[30vh] w-[1vh] bg-[#fff] mr'></div>
      </ul>
    </div>
  )
}

const MyLink = ({ pathName, path }) => {
  return (
    <>
      <a to={path} className='flex flex-col '>
        {pathName.split('').map(char => (
          <span className='block w-full text-lg -mt-3 font-semibold rotate-90'>
            {char}
          </span>
        ))}
      </a>
    </>
  )
}

export default Footer
