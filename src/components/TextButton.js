import React from 'react'
import { Button } from 'semantic-ui-react'

export default function TextButton(props) {
  return (
    <Button secondary floated={props.floated} active={props.active} disabled={props.disabled} onClick={props.onClick}>{props.children}</Button>
  )
}
