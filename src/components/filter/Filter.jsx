import { useState } from 'react'
import './filter.scss'
function Filter() {
  const [onsearch,setonserch]=useState('')

  return (
    <div className='filter'>
      <h3>Search results for</h3>
      <div className="top">
        <div className="item">
          <label htmlFor='city'>Location</label>
          <input type='text' id='city' name='city' placeholder='City Location' value={onsearch} onChange={(e)=>setonserch(e.target.value)}/>
        </div>
      </div>
      <div className="bottom">
        <div className="item">
          <label htmlFor="type">Type</label>
          <select name="type" id="type">
            <option value="">any</option>
            <option value="buy">Buy</option>
            <option value="rent">Rent</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="property">Property</label>
          <select name="property" id="property">
            <option value="">any</option>
            <option value="apartement">Apartement</option>
            <option value="home">Home</option>
            <option value="cando">Cando</option>
            <option value="land">Land</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="minprice">Min Price</label>
          <input type='number' id='minprice' name='minprice' placeholder='any'/>
        </div>
        <div className="item">
          <label htmlFor="maxprice">Max Price</label>
          <input type='number' id='maxprice' name='maxprice' placeholder='any'/>

        </div>
        <div className="item">
          <label htmlFor="bedroom">Bedroom</label>
          <input type='text' id='bedroom' name='bedroom' placeholder='any'/>

        </div>
        <button className='searchbtn'>
          <img src="/search.png" alt="" />
        </button>
      </div>
    </div>
  )
}

export default Filter