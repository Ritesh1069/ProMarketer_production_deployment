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
        <div className="card"><Link to={'/instagram'}><img id='insta' src="insta.png" alt="" /><div className='card-content'><h2>INSTAGRAM</h2><p>Lorem ipsum dolor siipisicing elit. Modi adipisci maxime, qi. Voluptates, ac</p><Button name='Instagram'/></div></Link></div>
        <div className="card"><Link to={'/email'}><img id='email' src="gmail.png" alt="" /><div className='card-content'><h2>EMAIL</h2><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, architecto.</p><Button name='Email'/></div></Link></div>
        <div className="card"><Link to={'/whatsapp'}><img id='whatsapp' src="WhatsApp.png" alt="" /><div className='card-content'><h2>WHATSAPP</h2><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, architecto.</p><Button name='WhatsApp'/></div></Link></div>
        <div className="card"><Link to={'/twitter'}><img id='twitter' src="twitter.png" alt="" /><div className='card-content'><h2>TWITTER</h2><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, architecto.</p><Button name='Twitter'/></div></Link></div>
        <div className="card"><Link to={'/ai'}><img id='ai' src="ai.png" alt="" /><div className='card-content'><h2>ARTIFICIAL INTELLIGENCE</h2><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, architecto.</p><Button name='Artificial Intelligence'/></div></Link></div>
        <div className="card"><Link to={'/analytics'}><img id='analytics' src="analytics.png" alt="" height={"100px"}/><div className='card-content'><h2>ANALYTICS</h2><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, architecto.</p><Button name='Analytics'/></div></Link></div>
       
        
    </div>
  </div>
    
  )
}

export default Explore

