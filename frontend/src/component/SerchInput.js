import React from 'react'
import "./SearchInput.css"
import search from "../assets/search.png"

const SerchInput = () => {
  return (
    <>
    <div className='Search'>
    <label className='Search-inbox'>
        <span className='search-input-inside'>
            <input className='search-input' type="text" />
        </span>
    <img className='search-icon' src={search} alt="search icon"/>
    </label>
    </div>
    </>
  )
}

export default SerchInput