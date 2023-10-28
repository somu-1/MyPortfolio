import React from 'react'
import './index.css'
import HomePic from './images/frontpage1.jpg'

import Common from './Common'

const Home = () => {
    return (
           <Common 
           heading='Grow your Business with' 
           btnDtls='Get started'
           image={HomePic}
           />
    )
}

export default Home
