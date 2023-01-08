import React from 'react'
import HomeContent from '../components/HomeContent'
import circle from '../sources/pictures/circle.png'
const About = () => {

  return (
    <><HomeContent 
      name='welcome to tech website '
      imgsrc={circle}
      visit='/contact'
      btname='contact now'
    />
    </>
  )
}

export default About


