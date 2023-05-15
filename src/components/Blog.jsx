import React from 'react'
import BlogItem from './BlogItem'
const url = './src/assets/DSC07641.JPG'

const Blog = () => {
  return (
    <div className='w-screen h-fit min-h-screen px-40 py-40'>
      <h1 className='header font-bold text-6xl'> Blogs</h1>
      <section className='blogsList bg-red-200 w-full min-h-screen mt-20 grid grid-cols-3 grid-rows-3 gap-2'>
        <BlogItem backgroundImg={''} />
      </section>
    </div>
  )
}

export default Blog
