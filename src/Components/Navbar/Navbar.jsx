import React from 'react'
import './Navbar.css'
import { BsSearch } from "react-icons/bs";
import Button from '../Button/Button';
import { IoMdMenu } from "react-icons/io";
import styled from 'styled-components'
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <>




    <nav>
      <div className='logoimg'><Link to={'/home'}><img className='logo' src="logo1.jpeg" alt="dikhabc" /></Link></div>
      
      <ul>
        <li><Link to={'/home'}>HOME</Link></li>
        <li><Link to={'/explore'}>EXPLORE</Link></li>
        <li><Link to={'/about'}>ABOUT</Link></li>
        <li><Link to={'/contact'}>CONTACT US</Link></li>
      </ul>
     <div className='login'>
      <BsSearch className='searchicon' style={{ fontSize: '24px'}} />
      <Logins>
      <div className="log_btns">
      <Button class='outline' name='LOGIN'/>
      <Button class='bluebox' name='SIGN IN'/>
      </div>
      </Logins>
      <Link to={'/menu'}><div className="menuicon"><a href=""><IoMdMenu style={{fontSize:'36px'}}/></a></div></Link>
      </div>
    </nav>
    </>
  )
}

export default Navbar

export const Logins = styled.div``;