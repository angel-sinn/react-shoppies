import React from 'react';
import { Message } from 'semantic-ui-react';

import './Banner.scss';

export default function Banner(props) {
  return (
    <div className="banner">
      <Message negative hidden={props.hidden} visible={props.visible}>
        <p>You have reached the maximum number of 5 nominations.</p>
      </Message>
    </div>
  )
}