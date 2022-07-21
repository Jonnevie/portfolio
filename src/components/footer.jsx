import React from 'react';

function Footer() {
   const myStyle = {
    textDecoration: "none",
    color: 'white',
    padding: '10px',
    fontSize: '20px'
   }

   const footerStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '10px'
   }
    
    return ( 

<div style={footerStyle} class="footer-foot">
        
                <a style={myStyle} href="https://github.com/Jonnevie?tab=repositories" class="social-icon" target="_blank">
                    <i style={myStyle} class="fab fa-github"></i> </a>
                <a  style={myStyle} href="https://www.linkedin.com/in/jonnevie/" class="social-icon" target="_blank">
                    <i style={myStyle} class="fab fa-linkedin"></i> </a>
                    <a  style={myStyle} href="mailto:jonnevie@gmail.com" class="social-icon" target="_blank">
                    <i style={myStyle} class="fab fa-google"></i> </a> 
        </div>

     );
}

export default Footer;
