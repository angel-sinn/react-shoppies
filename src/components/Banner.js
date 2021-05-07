import React from 'react'
import { Message } from 'semantic-ui-react'

export default function Banner(props) {
  return (
    <Message negative hidden={props.hidden} visible={props.visible}>
    <p>
      You have reached the maximum number of nominations
    </p>
  </Message>
  )
}