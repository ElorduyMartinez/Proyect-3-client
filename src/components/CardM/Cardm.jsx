import React from 'react'
import { Link } from "react-router-dom";
import "./Cardm.css"
const Cardm = () => {
  return (
    <div className='fullbody'>
    <div className='Container'>
        <div className='card'>
            <img src='https://www.elsoldemexico.com.mx/gossip/wah37u-scream.jpg/ALTERNATES/LANDSCAPE_1140/scream.jpg'/>
            <h4>Scream</h4>
            <p>Una perosna que mata mucha gente y disfruta de hacerlo</p>
            <Link to={"/Home"}> See more ...</Link>
        </div>
    </div>
    
    </div>
  )
}

export default Cardm