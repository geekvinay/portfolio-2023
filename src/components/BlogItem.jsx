import React, { useEffect, useState } from 'react'

const BlogItem = ({ backgroundImg }) => {
  const [bgURL, setBgURL] = useState({ background: `url(${backgroundImg})` })
  useEffect(() => {
    console.log(backgroundImg)
  }, [])
  return (
    <div className=' w-full'>
      <div
        className='background h-60 w-full border-b-[5px] border-white'
        style={bgURL}
      ></div>
    </div>
  )
}

export default BlogItem
