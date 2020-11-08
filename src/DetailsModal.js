import React from 'react';
import { Button, Modal } from 'react-bootstrap';

function DetailsModal({ show, handleClose, country = '' }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{country.Country_Region}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <h5>{`Total Cases: ${country.Confirmed}`}</h5>
      <h6>{`Total Deaths: ${country.Deaths}`}</h6>
      <h6>{`Total Recovered: ${country.Recovered}`}</h6>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={handleClose}>
          Close
    </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default DetailsModal