import React from 'react'

import TextButton from './TextButton';

import './LandingContainer.scss';

export default function LandingContainer(props) {
  return (
    <div className="landing-container">
        <img className="landing-image" src="./landing-pic.jpeg" alt="curtain-image" />
        <div className="landing-text-block">
        <h1 className="landing-header">Shoppies</h1>
        <p>Nominate up to 5 movies!</p>
        <div>
          <TextButton onClick={props.handleLandingButtonClick}>Nominate Movies</TextButton>
        </div>
        </div>
      </div>
  )
}