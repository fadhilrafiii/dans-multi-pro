import React from 'react';
import Navbar from './Navbar'
import { useHistory } from 'react-router-dom'
import Landing from './Landing'
import SearchJob from './SearchJob'
import Footer from './Footer'

// import { Container } from './styles';

function Jobs() {

  const history = useHistory();

  const routeChange = () =>{ 
    let path = `/`; 
    history.push(path);
  } 

  return <div className="jobs-page">
      <Navbar routeChange={routeChange} />
      <div className="myBody">
        <Landing />
        <SearchJob />
      </div>  
      <Footer />
  </div>;
}

export default Jobs;