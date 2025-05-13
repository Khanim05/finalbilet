import React from 'react'
import Main from '../../components/main/Main'
import Products from '../../components/products/Products'
import Best from '../../components/bestSeller/Best'
import Subs from '../../components/subs/Subs'

const Home = () => {
  return (
    <div>
      <Main/>
      <Products/>
      <Best/>
      <Subs/>
    </div>
  )
}

export default Home
