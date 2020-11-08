import React from 'react';
import styled from 'styled-components';


const HeaderWrapper = styled.header`
  width: 100vw;
  height: 10vh;
  color: white;
  display: flex;
  flex-direction: row;
  background: #d31027;
  background: -webkit-linear-gradient(to right, #d31027, #ea384d); 
  background: linear-gradient(to right, #d31027, #ea384d); 
  img {
    height: 15vh;
    width: 10vw;
    margin-left: 17%;
    -webkit-box-shadow: 10px 10px 5px 0px #800000;
    -moz-box-shadow: 10px 10px 5px 0px #800000;
    box-shadow: 10px 10px 5px 0px #800000;
  }
  h3 {
    align-items: center;
    color: #eaeafa;
    margin: auto 3em;
  }

  @media screen and (max-width: 1155px) {
   img {
    width: 15vw;
    height: 12vh
   }
   }
   @media screen and (max-width: 767px) {
    height: 8vh;
    img {
       height: 10vh
     }
    h3 {
      font-size: 1.3em
    }
  @media screen and (max-width: 528px) {
      h3 {
        font-size: .9em
      }
    }
`

function Header() {
  return (
    <HeaderWrapper>
      <img alt='' src={require('./images/virus.jpg')} />
      <h3>WIN AGAINST COVID-19</h3>
    </HeaderWrapper>
  );
}

export default Header;
