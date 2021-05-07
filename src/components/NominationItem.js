import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import AnimatedButton from './AnimatedButton';

import './NominationItem.scss';

export default function NominationItem(props) {

  return (
    <div className='nomination-item-card'>
      <Card>
      <Card.Content className='nomination-item-content'>
        <Image
          className='nomination-image'
          floated='left'
          src={props.poster}
        />
          <h4 className='nomination-item-header'>{props.title}</h4>
        </Card.Content>
          <AnimatedButton floated='right' onClick={props.onClick} disabled={props.disabled}>{props.buttonName}</AnimatedButton>
    </Card>
    </div>
  )
}


