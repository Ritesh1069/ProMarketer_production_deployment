import React from 'react'
import Button from '../Button/Button'
import './Analytics.css'
import Navbar from '../Navbar/Navbar'


const Analytics = () => {
  return (
    <div>
      <div>
      <Navbar/>
      
      <div class="img_h1">
        <div class="heading">
      
        <h1>WELCOME TO <b>INSIGHTS & ANALYTICS</b></h1>
         <p>Insights and analytics provide valuable data-driven insights into various aspects of a business, such as customer behavior, market trends, and performance metrics. By analyzing data from various sources, businesses gain a deeper understanding of their operations and customers, enabling informed decision-making and strategic planning. Insights and analytics tools utilize advanced algorithms and data visualization techniques to transform raw data into actionable insights, empowering businesses to optimize processes, enhance customer experiences, and stay competitive in today's dynamic market landscape.</p>

         <Button class='outline' name='LEARN MORE' style={{ marginBottom:'20px' }}/>
        </div>

        <div className="right_block">
            <h5>YOUR CAMPAIGNS</h5>
            <div className="cardss">
                <div className="cardy">
                     <img src='newinsta3dlogo.png' alt="" />
                     <div className="cardy_cont">
                        <h6>INSTAGRAM</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati officia voluptatem, autem quidem aliquam quas in alias necessitatibus reprehenderit exercitationem?</p>
                        <div className="bu">
                        <Button class='bluebox' name='INSIGTS' />
                        </div>
                     </div>
                </div>

                <div className="cardy">
                     <img src='newinsta3dlogo.png' alt="" />
                     <div className="cardy_cont">
                        <h6>INSTAGRAM</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati officia voluptatem, autem quidem aliquam quas in alias necessitatibus reprehenderit exercitationem?</p>
                        <div className="bu">
                        <Button class='bluebox' name='INSIGTS' />
                        </div>
                     </div>
                </div>

                <div className="cardy">
                     <img src='newinsta3dlogo.png' alt="" />
                     <div className="cardy_cont">
                        <h6>INSTAGRAM</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati officia voluptatem, autem quidem aliquam quas in alias necessitatibus reprehenderit exercitationem?</p>
                        <div className="bu">
                        <Button class='bluebox' name='INSIGTS' />
                        </div>
                     </div>
                </div>
            </div>
        
        </div>

         </div>


    </div>
    </div>
  )
}

export default Analytics
