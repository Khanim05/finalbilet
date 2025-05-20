import React from 'react'
import Main from '../../components/main/Main'
import About from '../../components/about/About'
import Products from '../../components/products/Products'
import Guest from '../../components/guest/Guest'
import Blog from '../../components/blog/Blog'

const Home = () => {
  return (
    <div>
      <Main/>
      <About/>
      <Products/>
      <Guest/>
      <Blog/>
    </div>
  )
}

export default Home
