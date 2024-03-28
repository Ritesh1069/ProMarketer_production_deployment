import React from 'react'
import Button from '../Button/Button'
import './Analytics.css'
import Navbar from '../Navbar/Navbar'
import { Link } from 'react-router-dom'


const Analytics = () => {
  return (
    <div>
      <div>
      <Navbar/>
      
      <div class="img_h1">
        <div class="heading">
      
        <h1>WELCOME TO <b>INSIGHTS & ANALYTICS</b></h1>
         <p>Insights and analytics provide valuable data-driven insights into various aspects of a business, such as customer behavior, market trends, and performance metrics. By analyzing data from various sources, businesses gain a deeper understanding of their operations and customers, enabling informed decision-making and strategic planning. Insights and analytics tools utilize advanced algorithms and data visualization techniques to transform raw data into actionable insights, empowering businesses to optimize processes, enhance customer experiences, and stay competitive in today's dynamic market landscape.</p>

         <Link to={'/*'}><Button class='outline' name='LEARN MORE' style={{ marginBottom:'20px' }}/></Link>
        </div>

        <div  id="anal_block"className="right_block">
            <h5>YOUR CAMPAIGNS</h5>
            <div className="cardss">
                <Link to={'/mainanal'}><div className="cardy">
                     <img src='newinsta3dlogo.png' alt="" />
                     <div className="cardy_cont">
                        <h6>INSTAGRAM</h6>
                        <p>Unlock limitless opportunities with Instagram Marketing! Reach your audience directly, build strong connections, and drive results. Our tailored campaigns ignite conversations, boost engagement, and nurture leads through personalized messages</p>
                        <div className="bu">
                        {/* <Button class='bluebox' name='INSIGTS' /> */}
                        </div>
                     </div>
                </div></Link>

                <Link to={'/mainanal'}><div className="cardy">
                     <img src='what_3d.png' alt="" id='wht_3d'/>
                     <div className="cardy_cont">
                        <h6>WHATSAPP</h6>
                        <p>Unlock limitless opportunities with WhatsApp Marketing! Reach your audience directly, build strong connections, and drive results. Our tailored campaigns ignite conversations, boost engagement, and nurture leads through personalized messages</p>
                        <div className="bu">
                        {/* <Button class='bluebox' name='INSIGTS' /> */}
                        </div>
                     </div>
                </div></Link>

                <Link to={'/mainanal'}><div className="cardy">
                     <img src='facebook_3d.png' alt=""  id='fb_3d'/>
                     <div className="cardy_cont">
                        <h6>FACEBOOK</h6>
                        <p>Unlock limitless opportunities with facebook Marketing! Reach your audience directly, build strong connections, and drive results. Our tailored campaigns ignite conversations, boost engagement, and nurture leads through personalized messages</p>
                        <div className="bu">
                        {/* <Button class='bluebox' name='INSIGTS' className='insg_btns'/> */}
                        </div>
                     </div>
                </div></Link>
            </div>
        
        </div>

         </div>


    </div>
    </div>
  )
}

export default Analytics
