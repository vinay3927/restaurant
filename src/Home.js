import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Container/Header'
import Table from './Container/Table'
import Filter from './Container/Filter'
import Card from './Container/Card'


const Home = () => {
  return (
    <div>
        <Header />
        <Table />
        <Filter />
        <Card />
    </div>
  )
}

export default Home