import React from 'react'
import './about.css'
import FooterArea from '../FooterArea/footer'


const AboutPage = ()=>{
    return(<>
        <div className="about-page">
            <h2 className="about-heading">About MJ News</h2>
            <section className="main-section">

                <header >
                    Introdution
                </header>
                       Hello everyone!. Welcome to m jithendra suryavarma is news web app. 
                      In this app to  You can read the news headlines and its description. this news app collect the overall world news.
                       Its not actually correct date contant. its just for my portfolio  project.
            </section>
   <section>

                <header>
                How it works
                </header>
                      If you want to read news see the following steps:
                       <ul>
                           <li className="steps">
                          Click the read news button such as top of the website
                         </li >
                         <li className="steps">read the overall news</li>
                         <li className="steps">if you want to read your favorite topic news, select the category </li>
                         <li className="steps">and Click the search button read your favorite news</li>
                </ul> 
            </section>
            <p className="remember">remember: this app just for my portfolio. so don't get serious.just for fun !.</p>

        </div>
      <FooterArea />
        
        </>
    )
}

export default AboutPage;