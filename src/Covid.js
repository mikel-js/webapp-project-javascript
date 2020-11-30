import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Countries from './Countries';
import FactsTicker from './FactsTicker';
import InfoPage from './InfoPage';
import useTotalState from './hooks/useTotalState';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

const CovidWrapper = styled.div`
  background-color: white;
  height: 100%;
  margin: 0 auto;
  padding-top: 5%;
  width: 70vw;

  @media screen and (max-width: 767px) {
    h1.Covid-header {
      font-size: 1.5em;
    }
    h4.Covid-header {
      font-size: 1.3em;
    }
  }
`;

function Covid() {
  const [stats, setStats] = useState([]);
  const [results, setResults] = useState([]);
  const [update, setUpdate] = useState();
  const [isAlphabetical, setSortAplhabetical] = useState(false);
  const [isAsc, setAsc] = useState(false);
  const [totalCases, setTotalCases] = useTotalState('cases');
  const [totalRecovered, setTotalRecovered] = useTotalState('recovered');
  const [totalDeaths, setTotalDeath] = useTotalState('death');

  const BASE_API_URL =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3131/stat'
      : '/stat';

  useEffect(() => {
    async function getData() {
      await axios
        .get(BASE_API_URL)
        .then((resp) => {
          return resp.data;
        })
        .then((data) => {
          setStats(data.data);
          setResults(data.data);
          setTotalCases(data.data);
          setTotalRecovered(data.data);
          setTotalDeath(data.data);
        })

        .catch((err) => {
          console.log('error');
        });
    }
    getData();
  }, []);

  const searchCountry = (e) => {
    const filteredCountry = stats.filter((stat) => {
      return stat.location.toLowerCase().includes(e.toLowerCase());
    });
    setResults(filteredCountry);
  };

  const sortAZ = () => {
    const sorted = results.sort((a, b) => {
      if (isAlphabetical === false) {
        return a.location > b.location ? 1 : -1;
      } else {
        return a.location > b.location ? -1 : 1;
      }
    });
    setResults([...sorted]);
    setSortAplhabetical(!isAlphabetical);
  };

  const sortAsc = () => {
    const sorted = results.sort((a, b) => {
      if (isAsc === false) {
        return a.confirmed > b.confirmed ? 1 : -1;
      } else {
        return a.confirmed > b.confirmed ? -1 : 1;
      }
    });
    setResults([...sorted]);
    setAsc(!isAsc);
  };

  return (
    <CovidWrapper>
      <Container fluid>
        <FactsTicker />
        <div>
          <h1 className='Covid-header'>What is COVID-19?</h1>
          <h4 className='Covid-header'>
            COVID-19 is a highly contagious disease caused by a type of
            coronavirus. The outbreak of COVID-19 was first reported in December
            2019, in Wuhan, China.
          </h4>
        </div>
        <Row>
          <Col sm={12} md={12} lg={4} id='countries-stat'>
            <Countries
              results={results}
              totalCases={totalCases}
              totalRecovered={totalRecovered}
              totalDeaths={totalDeaths}
              searchCountry={searchCountry}
              sortAZ={sortAZ}
              isAlphabetical={isAlphabetical}
              sortAsc={sortAsc}
              isAsc={isAsc}
              update={update}
            />
          </Col>
          <Col sm='auto' md='auto' lg='8'>
            <InfoPage />
          </Col>
        </Row>
      </Container>
    </CovidWrapper>
  );
}

export default Covid;
