import React from 'react'
import { HiChartSquareBar } from "react-icons/hi";
import './cards.css'
const Cards = (props) => {
  return (
    <div>
      <div className='cardox' style={{ backgroundColor:`${props.bg}` }}>
        <div className="topy">
         <h6>{props.name}</h6>
         <HiChartSquareBar style={{fontSize: '54px'}}/>
        </div>
        <p>{props.text}</p>
       
      </div>
    </div>
  )
}

export default Cards
