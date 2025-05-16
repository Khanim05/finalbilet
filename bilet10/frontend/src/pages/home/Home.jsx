import React from 'react'
import Main from '../../components/main/Main'
import Ship from '../../components/ship/Ship'
import Cards from '../../components/cards/Cards'
import Products from '../../components/products/Products'
import BigSale from '../../components/bigsale/BigSale'
const Home = () => {
  return (
    <div>
      <Main/>
      <Ship/>
      <Cards/>
      <Products/>
      <BigSale/>
    </div>
  )
}

export default Home
