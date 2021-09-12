 import React from 'react';
 import './contact.css'
 import FooterArea from '../FooterArea/footer';

 const ContactPage = ()=>{

    return(<>
        <div className="contact-page">
            <h2 className="contact-heading">Contact us</h2>
             <p>
                 Email: mjsuryavarma@gmail.com
             </p>
        </div>
        
        <FooterArea />
        </>
    )
 }

 export default ContactPage;