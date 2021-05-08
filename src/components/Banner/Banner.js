import React from 'react';

import { Message } from 'semantic-ui-react';

import './Banner.scss';

export default function Banner(props) {
  return (
    <div className='banner'>
      <Message
        color={props.color}
        size={props.size}
        hidden={props.hidden}
        visible={props.visible}
      >
        <p>{props.children}</p>
      </Message>
    </div>
  );
}
