 import React from 'react';
 import './contact.css'
 import FooterArea from '../FooterArea/footer';

 const ContactPage = ()=>{

    return(<>
        <div className="contact-page">

            <div className="contact-content">
        <h2 className="contact-heading">Contact us</h2>
             
             <p>
                 Email: mjsuryavarma@gmail.com
             </p>
             <p>
                 LinkedIn: <a className="about-contact-link" href="https://www.linkedin.com/in/m-jithendra-suryavarma-9b245020a/" target="_blank">https://www.linkedin.com/in/m-jithendra-suryavarma-9b245020a/</a>
             </p>
             <p>
               GitHub:  <a className="about-contact-link" href="https://github.com/mj-suryavarma" target="_blank"> https://github.com/mj-suryavarma </a>
             </p>
            </div>
        </div>
        
        <FooterArea />
        </>
    )
 }

 export default ContactPage;