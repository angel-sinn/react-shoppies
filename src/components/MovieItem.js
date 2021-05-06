import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import TextButton from './TextButton';

import './MovieItem.scss';

export default function MovieItem(props) {

  return (
    <div className="movie-card">
      <Card>
      <Card.Content className="movie-content">
        <Image
          floated='left'
          size='tiny'
          src={props.poster}
        />
        <Card.Header>{props.title}</Card.Header>
        <Card.Meta>{props.year}</Card.Meta>
      </Card.Content>
        <TextButton floated="right" onClick={props.onClick}>{props.button}</TextButton>
    </Card>
    </div>
    
  )
}

