import React from "react";

import { Button } from "semantic-ui-react";

export default function TextButton(props) {
  return (
    <Button basic inverted color={props.color} onClick={props.onClick}>
      {props.children}
    </Button>
  );
}
