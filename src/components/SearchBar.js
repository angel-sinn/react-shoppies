import React from 'react'
import { Form, Input } from 'semantic-ui-react'

import './SearchBar.scss';

export default function SearchBar(props) {

  const handleOnChange = (e) => {
    props.setSearchTerm(e.target.value)
  }

  return (
      <Form>
        <Form.Field>
          <div className="search-field">
          <Input icon='search' placeholder="Search movies" type="text" value={props.searchTerm} onChange={handleOnChange}/>
          </div>
        </Form.Field>
      </Form>
  )
}