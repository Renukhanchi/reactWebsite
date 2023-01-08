import React from 'react'
import HomeContent from '../components/HomeContent'
import circle from '../sources/pictures/circle.png'
const Home = () => {
 
  return (
    <><HomeContent 
      name='Grow your buiness with'
      imgsrc={circle}
      visit='./service'
      btname='Get started'
    />
    </>
  )
}

export default Home