import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import TextButton from './TextButton';

import './NominationItem.scss';

export default function NominationItem(props) {

  return (
    <div className="nomination-item-card">
      <Card>
      <Card.Content className="nomination-item-content">
        <Image
          className='nomination-image'
          floated='left'
          src={props.poster}
        />
        <Card.Header className="nomination-item-header">{props.title}</Card.Header>
          <Card.Meta>{props.year}</Card.Meta>
      </Card.Content>
        <TextButton floated="right" onClick={props.onClick} disabled={props.disabled}>{props.buttonName}</TextButton>
    </Card>
    </div>
  )
}


