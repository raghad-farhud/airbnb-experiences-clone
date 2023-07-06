import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Herosection from './components/Herosection'
import Card from './components/Card'
import Footer from './components/Footer.jsx'
import data from './data.js'

function App() {

  const cardData = data.map(card => {
    return <Card 
      title={card.title}
      price={card.price}
      coverImg={card.coverImg}
      rating={card.stats.rating}
      reviewCount={card.stats.reviewCount}
      location={card.location}
      openSpots={card.openSpots}
    />
  })
  

  return (
    <>
        <div className="container">
          <Navbar />
          <Herosection />
          <div className="cards-container">
            {cardData}
          </div>
          <Footer />
        </div>
    </>
  )
}

export default App
