import React from 'react'
import './search-box.styles.css'

const SearchBox = ({ handleChange, searchField, placeholder }) => (
  <input type='search' placeholder={placeholder}  value={searchField} onChange={handleChange}  className='search' />

)

  


export default SearchBox
