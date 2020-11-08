import React, { useState } from 'react';
import Ticker from 'react-ticker';
import styled from 'styled-components';

const TickerWrapper = styled.section`
@media screen and (max-width: 767px) {
  h3 {
    font-size: 1.3em
  }
  h5 {
    font-size: 1.1em
  }
`

function FactsTicker() {
    const updates = [
    { info: "COVID-19's outer layer is made up of lipids(fats), that's why washing with soap is best recommended, it dissolves the virus' protective layer. Way to go SOAP!" },
    { info: "Antibiotics don't work on COVID, as it is caused by a virus." },
    { info: "Alcohol or hand sanitizer should have atleast 60% concentration to be effective against COVID19." },
    { info: 'Coronavirus comes from the latin word "corona", meaning crown. When look under a microscope, coronavirus have crown-like spikes on the surface.' },
  ]

  const randomInfo = () => {
    const randomNumber = Math.floor(Math.random() * updates.length);
    const info = updates[randomNumber].info;
    return info;
  }

  const [isMoving, setIsMoving] = useState(true)

  return (
    <TickerWrapper>
      <h3 style={{ color: 'black' }}>Did you know?</h3>
      <Ticker
        move={isMoving}
        mode='await'
        speed={15} 
        style={{ whiteSpace: "nowrap" }}>
        {() => (
          <>
            <h5 style={{ cursor: 'grab', whiteSpace: "nowrap" }}
              onMouseOver={() => setIsMoving(false)}
              onMouseOut={() => setIsMoving(true)}
            >
              {randomInfo()}
            </h5>
          </>
        )}
      </Ticker>
    </TickerWrapper>
  )
}

export default FactsTicker
