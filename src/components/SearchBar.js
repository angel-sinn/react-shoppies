import React from 'react'

export default function SearchBar() {

  return (
    <div className="search-bar ui segment">
      <form className="ui form">
        <div className="field">
          <label>Movie Search</label>
          <div class="ui icon input">
            <input type="text"/>
            <i class="search icon"></i>
          </div>
        </div>
      </form>
    </div>

  )
}