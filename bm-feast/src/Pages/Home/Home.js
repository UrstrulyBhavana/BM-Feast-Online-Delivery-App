import React, { useState } from 'react'
import './Home.css'
import Header from '../../Components/Header/Header'
import ExploreMenu from '../../Components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../Components/FoodDisplay/FoodDisplay'
import AppDownload from '../../Components/AppDownload/AppDownload'
import Highlights from '../../Components/Highlights/Highlights';

const Home = () => {
  const [category, setCategory] = useState("All")

  return (
    <div>
      <Header />
      <Highlights />
      <ExploreMenu id="explore-menu" category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <AppDownload />
    </div>
  )
}

export default Home