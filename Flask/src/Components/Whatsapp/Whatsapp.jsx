import React from 'react'
import Navbar from '../Navbar/Navbar'
// import Content from '../Head&Content/Content'
import Button from '../Button/Button'
import './Whatsapp.css'
import { FaMagic } from "react-icons/fa";



const Whatsapp = () => {
  return (
    <div>
      <Navbar/>
      
      <div class="img_h1">
        <div class="heading">
      
        <h1>WELCOME TO <b id='what_color'>WHATSAPP-BOT</b></h1>
         <p>A WhatsApp bot is an automated software designed to interact with users on the WhatsApp platform. Leveraging AI and predefined responses, it can answer queries, provide information, and perform tasks based on user input. WhatsApp bots are employed in various domains, from customer service to marketing, streamlining communication processes. They offer quick responses, gather data, and execute tasks, enhancing user experience and facilitating businesses in managing interactions efficiently on the popular messaging platform.</p>

         <Button class='outline' name='LEARN MORE' style={{ marginBottom:'20px' }}/>
        </div>

        <div className="right_block">
            <h5>PROVIDE REQUIRED DETAILS</h5>
        
            <input className='input' type="text" placeholder="Enter the Numbers"  />
            <div className="whats_content">
            <input className="input" type="text" placeholder="Enter the Message" />
            <input className='input' type="file" placeholder="Upload the Docs or Media"  />
            <button className='ai_btn_whtsp'> <FaMagic /> AI</button>
         
            </div>
            <div className='buttons'>
               <Button class='bluebox' name='SUBMIT'/>
               <Button class='outline' name='RESET'/>  
         </div>
        </div>

         </div>


    </div>

    
  )
}

export default Whatsapp
