import React from 'react'
import NewDash from './NewDash'
import './main_page.css'
import Cards from './Cards'
import Bargraph from './Bargraph'
import StackedAreaChart from './StackedAreaChart'
import MultipleYAxesScatterChart from './ScatterPlot'
import CustomActiveShapePieChart from './CustomActiveShapePieChart'
import SimpleRadarChart from './SimpleRadarChart'


const MainPage = () => {
  
  return (
    <div className='body'>
      <h1>EMAIL CAMPAIGN DASHBOARD</h1>
      <div className="top">
      <Cards text="4000" parameter="hrs" name="SALES" bg="rgb(255, 208, 0)"/>
      <Cards text="400K" parameter="hrs" name="REACH" bg="rgb(255, 17, 0)"/>
      <Cards text="800" parameter="hrs" name="VISITORS" bg="rgb(41, 150, 1)"/>
      <Cards text="87k" parameter="hrs" name="LIKES" bg="rgb(0, 13, 255)"/>
    </div>
      <div className='charts'>
      <NewDash/>
      <Bargraph/>
      <CustomActiveShapePieChart/>
      </div>

      <div className='charts'>
       <StackedAreaChart/>
       <MultipleYAxesScatterChart/>
       <SimpleRadarChart/>
      </div>
    </div>
  )
}

export default MainPage
