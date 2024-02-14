import React from 'react'
import Button from '../Button/Button'
import './Content.css'
import { Logins } from '../Navbar/Navbar'
import { FaMagic } from "react-icons/fa";
import { RiSpamFill } from "react-icons/ri";

const Content = (props) => {
  return (
    <>
     <div class="img_h1">
        <div class="heading">
      
        <h1>{props.h1}</h1>
         <p>{props.p}</p>

         <Button class='outline' name='LEARN MORE' style={{ marginBottom:'20px' }}/>
        </div>

        <div className="right_block">
            <h5>PROVIDE EMAILS</h5>


            <div className='email_inps'>
            <input className='input' type="file" name="Upload your .CSV file" id="file" placeholder='Upload the .xls, .xlsv files only' />
            <input className='input' type="text" name="Upload your .CSV file" id="file" placeholder='Provide emails directly'/>
            </div>

            <p>OR</p>
            <input className="input" type="email" name="Enter your Emails here" id="inpemail"/>
            <button className='ai_btn'> <FaMagic /> AI</button>
            <button className='spam_btn'> <RiSpamFill size={20} /> Cheak Spam</button>
            <div className='buttons'>
               <Button class='bluebox' name='SUBMIT'/>
               <Button class='outline' name='RESET'/>  
         </div>
        </div>

         </div>
    </>
  )
}

export default Content
