import '../assets/css/Home.css'
import React, { useContext } from 'react'
import Card from '../components/Card'
import Banner from '../components/Banner'
import Contexto from '../context/Context'

const Home = () => {
  const {pizzas} = useContext(Contexto)
  return (
    <div className='home'>
      <Banner></Banner>
      <h2>Pizzas</h2>

      <div className='homeCardsContainer'>
        {pizzas.map((item) => {
          return <Card pizza={item} />
        })}
      </div>

    </div>
  )
}

export default Home