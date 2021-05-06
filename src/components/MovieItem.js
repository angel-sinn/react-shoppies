import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import TextButton from './TextButton';

export default function MovieItem(props) {
  return (
  <Card>
    <Image src={props.poster} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{props.title}</Card.Header>
      <Card.Meta>{props.year}</Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <TextButton>Nominate</TextButton>
    </Card.Content>
    </Card>
  )
}

