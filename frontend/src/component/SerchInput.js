import React from 'react'
import "./SearchInput.css"
import search from "../assets/search.png"

const SerchInput = () => {
    const myFunction = () => {
        console.log("Clicked")
    }
  return (
    <>
    <div className='Search'>
    <label className='Search-inbox'>
        <span className='search-input-inside'>
            <input className='search-input' type="text" />
        </span>
        
    <img className='search-icon' src={search} alt="search icon"/>
    <button type='submit' className='search-btn' onClick={myFunction}></button>
    </label>
    </div>
    </>
  )
}

export default SerchInput