import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import TextButton from './TextButton';

import './MovieItem.scss';

export default function MovieItem(props) {
  // return (
  //    <div className="movie-list">
  //     <Card>
  //   <Image src={props.poster} size="tiny" wrapped ui={false} />
  //   <Card.Content>
  //     <Card.Header>{props.title}</Card.Header>
  //     <Card.Meta>{props.year}</Card.Meta>
  //   </Card.Content>
  //   <Card.Content extra>
  //     <TextButton>Nominate</TextButton>
  //   </Card.Content>
  //   </Card>
  //    </div>
  // )

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
        <TextButton floated="right">Nominate</TextButton>
      </Card.Content>
    </Card>
  )
}

