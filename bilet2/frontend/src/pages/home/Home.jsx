import React from 'react'
import Main from '../../components/main/Main'
import ProductsC from '../../components/productsComp/ProductsC'
import AboutC from '../../components/aboutC/AboutC'
import Tam from '../../components/team/Tam'
import Service from '../../components/service/Service'

const Home = () => {
  return (
    <div>
      <Main/>
      <ProductsC/>
      <AboutC/>
      <Tam/>
      <Service/>
    </div>
  )
}

export default Home
