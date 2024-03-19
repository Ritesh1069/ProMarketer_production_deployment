import React from 'react';
import Button from '../Button/Button';
import './Content.css';
import { FaMagic } from "react-icons/fa";
import { RiSpamFill } from "react-icons/ri";

const Content = (props) => {
  return (
    <>
      <div className="img_h1">
        <div className="heading">
          <h1>{props.h1}</h1>
          <p>{props.p}</p>
          <Button class='outline' name='LEARN MORE' style={{ marginBottom: '20px' }} />
        </div>

        <div className="right_block">
          <h5>PROVIDE EMAILS</h5>

          <div className='email_inps'>
            {/* Input block with PNG image background */}
            <label htmlFor="file" id='png_block' className="input">
              <img src="file_logo.png" alt="Upload your .CSV file" className="input-image" id='inp_img'/>
              <input type="file" name="file" id="file" accept=".csv, .xls, .xlsx" style={{ display: 'none' }} />
            </label>
            
            {/* Alternatively, you can use a text input */}
            <input className='input' type="text" name="Upload your .CSV file" id="file" placeholder='Provide emails directly' />
          </div>

          <p>OR</p>
          <input className="input" type="email" name="Enter your Emails here" id="inpemail" />
          <button className='ai_btn'> <FaMagic /> AI</button>
          <button className='spam_btn'> <RiSpamFill size={20} /> Check Spam</button>
          <div className='buttons'>
            <Button class='bluebox' name='SUBMIT' bid={props.cid}/>
            <Button class='outline' name='RESET' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Content;
