import React from 'react'
import { Segment, Form, Input } from 'semantic-ui-react'

import './SearchBar.scss';

export default function SearchBar() {

  return (
      <Form>
        <Form.Field>
          <div className="search-field">
            <label>Movie title</label>
            <Input icon='search' type="text" />
          </div>
        </Form.Field>
      </Form>
  )
}