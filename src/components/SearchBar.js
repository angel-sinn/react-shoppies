import React from 'react'
import { Segment, Form, Input } from 'semantic-ui-react'

export default function SearchBar() {

  return (
    <Segment>
      <Form>
        <Form.Field>
          <div>
            <label>Movie title</label>
            <Input icon='search' type="text" />
          </div>
        </Form.Field>
      </Form>
    </Segment>
  )
}