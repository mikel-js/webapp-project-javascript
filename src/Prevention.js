import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Prevention.css'

function Prevention() {
  return (
    <Container>
      <h2>Protect yourself!</h2>
      <Row className='prevention-row'>
        <Col sm={6} md={6} lg={3} className='prevention-column'>
          <img className='prevention-img' alt='handwash' src={require('./images/handwash.png')} />
          <p>Wash your hands regularly and thouroughly with soap or alcohol. Soap and alcohol can kill viruses, including coronavirus. </p>
        </Col>
        <Col sm={6} md={6} lg={3} className='prevention-column'>
          <p>Maintain a distance of atleast 3 feet (1 metre) between yourself and other people. This lessen the risk of you, being exposed to the virus.</p>
          <img className='prevention-img' alt='social_distancing' src={require('./images/keep-distance.png')} />
        </Col>
        <Col sm={6} md={6} lg={3} className='prevention-column'>
          <img className='prevention-img' alt='stay_home' src={require('./images/stay-at-home.png')} />
          <p>Whether you are healthy, or experiencing any of the symptoms, staying at home is advised. </p>
        </Col>
        <Col sm={6} md={6} lg={3} className='prevention-column'>
        <p>Cover your mouth with your flexed elbow, or with a tissue whenever you cough or sneeze, this will prevent the spread of potential viruses.</p>
          <img className='prevention-img' alt='cover_mouth' src={require('./images/cough.png')} />
        </Col>
      </Row>
    </Container>
  )
}

export default Prevention