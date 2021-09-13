import React from 'react'
import './home.css'
import {Link} from 'react-router-dom'


function NavigationPage (){

    return ( <>
    {/* this is heading areas  */}
        <div className="Heading">
        <Link to="/" className="logo" >
                     MJ News</Link>
                     <ul className="nav">
                     <Link  className="nav-link nav-about" to="/about">
                     <li>About us</li>
                     </Link>
                     <Link className="nav-link nav-contact" to='/contact'>
                     <li >Contact us</li>
                     </Link>
                     <Link className="nav-link " to="/Search">
                     <button className="read-btn">Read news</button>
                     </Link >
        
                 </ul>
                 
            </div>


          
     </> );
}

export default NavigationPage;
