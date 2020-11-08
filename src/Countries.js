import React, { useState } from 'react';
import Moment from 'react-moment';
import './Countries.css';
import { Button } from 'react-bootstrap';
import DetailsModal from './DetailsModal';


function Countries({ results, totalCases, totalRecovered, totalDeaths, update, searchCountry, sortAZ, isAlphabetical, isAsc, sortAsc }) {
  const [show, setShow] = useState(false);
  const [country, setCountry] = useState([])
  

  const handleClose = (e) => {
    setShow(false)
    window.location.reload(false);
  };
  const handleShow = () => setShow(true);

  const showDetails = (res) => {
    setCountry(res)
    handleShow()
  }
  
  return (
    <div className='countries-container'>
      <div className='countries-content'>
        <h1>Total Cases {totalCases}</h1>
        <h4>Total Recovered {totalRecovered}</h4>
        <h5>Total Deaths {totalDeaths} </h5>
        <h5>Last updated: <Moment unix>{update/1000}</Moment></h5>
      </div>
      <div className='countries-input'>
        <input
          onChange={(e) => {
            searchCountry(e.target.value)
          }}
          placeholder='Search countries'
        />
      </div>
      <div className='countries-sortButton'>
        <Button variant="outline-info" onClick={sortAZ}>
          {!isAlphabetical ? 'Sort A-Z' : 'Sort Z-A'}
        </Button>
        <Button variant="outline-danger" onClick={sortAsc}>
          {!isAsc ? 'Ascending' : 'Descending'}
        </Button>
      </div>
      <div className='countries-list'>
        <p className='countries-details'>Click country name to show more details</p>
        <ul className="overflow-auto" id="style-15">
          {results ? (results.map((result, index) => (
            <li
              key={result.attributes.OBJECTID}
              onClick={() => {
                showDetails(result)
              }}
              style={{ cursor: 'pointer' }}
            >{`${index + 1}. ${result.attributes.Country_Region} : ${result.attributes.Confirmed}`}</li>
          ))) : <p>Problem loading the data, please refresh after a while.</p>
          }
          <DetailsModal
            show={show}
            handleClose={handleClose}
            country={country.attributes}
          />
        </ul>
      </div>
    </div>
  )
}

export default Countries
