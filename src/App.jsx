import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import 'normalize.css'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className='ml-24'>{children}</div>
      <Footer />
    </>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <Home />
      </Layout>
    )
  },
  {
    path: '/about',
    element: (
      <Layout>
        <About />
      </Layout>
    )
  }
])

function App () {
  return (
    <div className='relative'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
