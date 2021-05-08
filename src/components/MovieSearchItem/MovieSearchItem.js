import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import AnimatedButton from '../AnimatedButton/AnimatedButton';

import './MovieSearchItem.scss';

export default function MovieSearchItem(props) {
  return (
    <div className="movie-search-item-card">
      <Card>
        <div className="movie-search-item-image">
          <Image src={props.poster} wrapped ui={false} />
        </div>
        <Card.Content className="movie-search-item-content">
          <Card.Header className="movie-search-item-header">
            {props.title}
          </Card.Header>
          <Card.Meta>{props.year}</Card.Meta>
        </Card.Content>
        <AnimatedButton
          floated="right"
          onClick={props.onClick}
          disabled={props.disabled}
        >
          {props.buttonName}
        </AnimatedButton>
      </Card>
    </div>
  );
}
