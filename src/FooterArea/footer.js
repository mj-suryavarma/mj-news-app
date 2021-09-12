import React from 'react'
import './footer.css'
import myImage from './jithendra.jpg'
import {Link} from 'react-router-dom'



const FooterArea =()=>{

    

    return(<>

        <footer className="footer-area">
            <div className="footer-about">
            <div className="me">
                <img src={myImage} alt='jithendra' className='jithendra'/>
                 <div className="my-name"> MJ Suryavarma </div> 
            </div>
            <p className="copy-right"> &copy; mjnews @2021 </p>
            </div>
            <div className="footer-privacy">
               <a href="#" className="footer-links">Privacy </a>
               <a href="#"className="footer-links">Terms</a>
               <a href="#" className="footer-links">Conditions</a>

            </div>
              <div className="footer-contact">
                <Link to="/contact" className="footer-links">Contact</Link>
                <a href="https://www.linkedin.com/in/m-jithendra-suryavarma-9b245020a/" target="_blank" className="footer-links">Linkedin</a>
             </div> 
             
        </footer>
        </>
    )
}
export default FooterArea