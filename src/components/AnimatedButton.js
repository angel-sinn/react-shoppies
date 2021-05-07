import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

export default function AnimatedButton(props) {

  return (
    <Button animated='vertical' color='black' floated={props.floated} active={props.active} disabled={props.disabled} onClick={props.onClick}>
      <Button.Content visible>{props.children}</Button.Content>
      <Button.Content hidden>
        <Icon name={props.children === 'Remove' ? 'trash alternate' : 'trophy'} />
      </Button.Content>
    </Button>
  )
}
