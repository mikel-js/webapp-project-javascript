import React from 'react';
import Covid from './Covid';
import Header from './Header';
import Footer from './Footer';
import styled from 'styled-components';

const CovidAppWrapper = styled.div`
  width: 100vw
`

function CovidApp() {
  return (
    <CovidAppWrapper className='Covid-app'>
      <Header />
      <Covid />
      <Footer />
    </CovidAppWrapper>
  );
}

export default CovidApp;
