import React from 'react'
import Navbar from '../Navbar/Navbar'
import Button from '../Button/Button'
import { FaMagic } from 'react-icons/fa'
import { RiSpamFill } from 'react-icons/ri'
import './Gemini.css'

const Gemini = () => {
  return (

    <>
     <div>
      <Navbar/>
      
      <div class="img_h1">
        <div class="heading">
      
        <h1>WELCOME TO <b id='color'>CONTENT-BOT</b></h1>
         <p>🚀 Meet Gemini AI Content Generating Bot: Your WhatsApp assistant leveraging AI for instant responses, data gathering, and task execution. Streamline communication, enhance user experience, and boost productivity effortlessly! #GeminiAI #WhatsAppBot 🤖✨🌟 Revolutionize your WhatsApp interactions with Gemini AI: The ultimate AI-powered assistant for seamless communication, quick responses, and efficient task handling. Say hello to enhanced productivity and unparalleled user experience! 🚀📱</p>

         <Button class='outline' name='LEARN MORE' style={{ marginBottom:'20px' }}/>
        </div>

        <div className="right_block">
            <h5>GEMINI AT YOUR SERVICE</h5>
        
            <div className="prompt">
            <input className='prompt_input' type="text" placeholder="Enter Prompt for your Product"  />
            <Button class='bluebox' name='SUBMIT' id="btnn"/>
            </div>
            <input className="gemini_response" type="text" placeholder="response will be generated here" />   
           
        </div>

         </div>


    </div>

    </>
  )
}

export default Gemini
