import React from 'react'
import './about.css'
import FooterArea from '../FooterArea/footer'
import {Link} from 'react-router-dom'


const AboutPage = ()=>{
    return(<>
        <div className="about-page">
            <h2 className="about-heading">About MJ News</h2>
            <section className="main-section">

                <header >
                    Introdution
                </header>
                       Hello everyone!. Welcome to m jithendra suryavarma is news web app. 
                      In this app help to read top trending news headlines and its description. this news app collect the overall world news.
                       
            </section>
   <section>

                <header>
                How it works
                </header>
                      If you want to read news see the following steps:
                       <ul>
                           <li className="steps">
                          Click the read news button at the top of the website
                         </li >
                         <li className="steps">read the top trending news from around the world!</li>
                         <li className="steps">or if you want to read your favorite topic news, just search what you want </li>
                         <li className="steps">and Click the read more button for read full article</li>
                </ul> 
            </section>
            <p className="remember">Help: this app just for my portfolio. just for fun !.Please give a feedback .its really very helpful for me. thankyou! have a great time!</p>
                           <button><Link to="/contact">Feedback!</Link></button>
        </div>
      <FooterArea />
        
        </>
    )
}

export default AboutPage;