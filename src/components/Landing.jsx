import React from 'react';
import '../styles/Landing.scss'
// import { Container } from './styles';

function Landing() {
  return (
      <div id="home" className="landing-container">
          <div className="landing-content-container columns">
              <div className="clipContainer column">
                  <img src="images/2838063.png" alt="Landing Page"/>
              </div>
              <div className="titleContainer column">
                  <h1>Looking For Jobs?</h1>
                  <div className="buttons">
                        <a className="button is-light">
                            Get Started
                        </a>
                  </div>
              </div>
          </div>
          <hr />
      </div>
  );
}

export default Landing;