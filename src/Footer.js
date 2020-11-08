import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
width: 100vw;
display: flex;
background: #d31027;
background: -webkit-linear-gradient(to right, #d31027, #ea384d); 
background: linear-gradient(to right, #d31027, #ea384d); 
height: 12vh;
color: white;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 0;
margin: 0;
font-size: .7em;
img {
  width: 2em;
  margin: 0 1em;
  color: white;
}
.footer-socmed {
  display: flex;
  flex-direction: row
}
.footer-disclaimer {
  margin: 0 auto
}
.footer-disclaimer p {
  text-align: center;
}

@media screen and (max-width: 840px) {
  height: 18vh;
  
  .footer-socmed, .footer-disclaimer  {
    font-size: .8em;
   
  }
  
  .footer-disclaimer p  {
    margin: 0
  }
 }

@media screen and (max-width: 500px) {
  .footer-socmed, .footer-disclaimer  {
    font-size: .8em
  }

  .footer-disclaimer p  {
    margin: 0
  }
 }
`

function Footer() {
  return (
    <FooterWrapper>
      <div className='footer-socmed'>
        <p>Follow me on </p>
        <a href='https://github.com/mikel-js' target='blank'>
          <img src={require('./images/github.png')} alt='gitHub' />
        </a>
        <a href='https://www.linkedin.com/in/michael-castro-1331bb89/' target='blank'>
          <img src={require('./images/linkedin.png')} alt='LinkedIN' />
        </a>
      </div>
      <div className='footer-disclaimer'>
        <p>All information are based on reliable sources, mainly from WHO website. COVID-19 cases is from CSSE @ John Hopkins University.</p>
        <p>©:Michael Castro 2020</p>
      </div>

    </FooterWrapper>
  )
}

export default Footer