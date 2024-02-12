import React from 'react'
import './Explore.css'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'
const Explore = () => {
  return (
  <div>
    <div className='explore_whole'>
      <nav className='explore_nav'>
         EXPLORE   
      </nav>
    </div>
    <div className="cards">
        <div className="card"><Link to={'/instagram'}><img src="newinsta3dlogo.png" alt="" /><div className='card-content'><h2>INSTAGRAM</h2><p>Lorem ipsum dolor siipisicing elit. Modi adipisci maxime, qi. Voluptates, ac</p><Button name='INSTAGRAM'/></div></Link></div>
        <div className="card"><Link to={'/email'}><img src="newinsta3dlogo.png" alt="" /><div className='card-content'><h2>EMAIL</h2><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, architecto.</p><Button name='INSTAGRAM'/></div></Link></div>
        <div className="card"><Link to={'/whatsapp'}><img src="newinsta3dlogo.png" alt="" /><div className='card-content'><h2>WHATSAPP</h2><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, architecto.</p><Button name='INSTAGRAM'/></div></Link></div>
        <div className="card"><Link to={'/instagram'}><img src="newinsta3dlogo.png" alt="" /><div className='card-content'><h2>CHAT GPT</h2><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, architecto.</p><Button name='INSTAGRAM'/></div></Link></div>
        <div className="card"><Link to={'/instagram'}><img src="newinsta3dlogo.png" alt="" /><div className='card-content'><h2>TWITTER</h2><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, architecto.</p><Button name='INSTAGRAM'/></div></Link></div>
        <div className="card"><Link to={'/analytics'}><img src="newinsta3dlogo.png" alt="" /><div className='card-content'><h2>ANALYTICS</h2><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, architecto.</p><Button name='INSTAGRAM'/></div></Link></div>
       
        
    </div>
  </div>
    
  )
}

export default Explore

