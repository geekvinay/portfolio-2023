import React from 'react'
import { Link, BrowserRouter } from 'react-router-dom'

const Header = () => {
  return (
    <div className='bg-red-500 w-24 h-screen absolute top-0 bottom-0'>
      <ul className='flex flex-col items-center justify-between  h-full'>
        <li>
          <MyLink path='Home' />
        </li>
      </ul>
    </div>
  )
}

const MyLink = ({ path }) => {
  return (
    <Link className='flex flex-col' to={path}>
      {path.split('').reverse().map(char => (
        <span className='block w-full -rotate-90'>{char}</span>
      ))}
    </Link>
  )
}

export default Header
