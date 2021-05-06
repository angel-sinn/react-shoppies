import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import TextButton from './TextButton';

import './MovieItem.scss';

export default function MovieItem(props) {

  return (  
    <Card>
      <Card.Content>
        <Image
          floated='left'
          size='tiny'
          src={props.poster}
        />
        <Card.Header>{props.title}</Card.Header>
        <Card.Meta>{props.year}</Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <TextButton floated="right" onClick={props.onClick}>Nominate</TextButton>
      </Card.Content>
    </Card>
  )
}

