import React from 'react';
import { Button, Modal } from 'semantic-ui-react';

export default function ModalPopup(props) {
  return (
    <Modal
      trigger={<Button color={props.buttonColor}>{props.buttonText}</Button>}
      header={props.header}
      content={props.content}
      actions={[{ key: 'done', content: 'Done', positive: true }]}
    />
  );
}
