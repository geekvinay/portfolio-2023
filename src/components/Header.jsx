import React from 'react'
import { Link, BrowserRouter } from 'react-router-dom'

const Header = () => {
  return (
    <div className='w-16 z-10 h-screen absolute top-0 bottom-0 pb-8 font-mono'>
      <ul className='flex flex-col items-center justify-between h-full'>
        <div className='h-[30vh] w-[1vh] bg-[#fff] mr '></div>
        <li>
          <MyLink pathName='Contact' path='/contact' />
        </li>
        <li>
          <MyLink pathName='About' path='/about' />
        </li>
        <li>
          <MyLink pathName='Blog' path='/blog' />
        </li>
        <li>
          <MyLink pathName='Back' path='/' />
        </li>
      </ul>
    </div>
  )
}

const MyLink = ({ path, pathName }) => {
  return (
    <Link className='flex flex-col' to={path}>
      {pathName
        .split('')
        .reverse()
        .map(char => (
          <span className='block w-full text-lg font-semibold -mt-3 -rotate-90'>
            {char}
          </span>
        ))}
    </Link>
  )
}

export default Header
