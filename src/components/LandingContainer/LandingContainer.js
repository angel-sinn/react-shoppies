import React from "react";

import { Icon } from "semantic-ui-react";

import TextButton from "../TextButton/TextButton";

import "./LandingContainer.scss";

export default function LandingContainer(props) {
  return (
    <div className="landing-container">
      <img className="landing-image" src="./landing-pic.jpeg" alt="curtain" />
      <div className="landing-text-block">
        <h1 className="landing-header">
          <Icon name="film" />
          <span> </span>
          Shoppies Nominations
        </h1>
        <p>Nominate up to 5 movies!</p>
        <div className="landing-button">
          <TextButton onClick={props.handleLandingButtonClick}>
            Start Nominating
          </TextButton>
        </div>
      </div>
    </div>
  );
}
