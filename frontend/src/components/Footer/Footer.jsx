import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
           <img src={assets.logo} alt="" />
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur culpa vitae voluptas dolores repellendus vero ex accusantium vel deleniti. Vero corrupti adipisci consequatur blanditiis error id optio nesciunt veritatis unde?</p>
           <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
           </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+251 967893212</li>
                <li>contact@etfresh.com</li>
            </ul>
        </div>
      </div>
      <hr/>
      <p className="footer-copyright">Copyright 2024 @ etfresh.com All right reserved.</p>
    </div>
  )
}

export default Footer
