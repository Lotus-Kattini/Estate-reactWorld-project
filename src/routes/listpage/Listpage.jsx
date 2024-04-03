import { listData } from '../../lib/Dummydata'
import './listpage.scss'
import '../../components/filter/filter.scss'
// import Filter from '../../components/filter/Filter';
import Card from '../../components/card/Card'
import Map from '../../components/map/Map';
import { useRef, useState } from 'react';

function Listpage() {
  const data=listData;
  const map=useRef()
  function openMap(){
    map.current.classList.add('active')
  }
  const [onsearch,setonserch]=useState('')
  const [priceflag,setpriceflag]=useState(false)
  const [searchprice,setseachprice]=useState(0)
  console.log(searchprice)

  
  const filterdData=data.filter((item)=>item.address.toLowerCase().includes(onsearch.toLowerCase())
  )

  const filterdPriceData=data.filter((item)=>item.price>=searchprice)
  console.log(filterdPriceData)

  // const showwitchData= onsearch ===''? searchprice ===0 ?data : filterdData;
  const showwitchData=  (searchprice !==0 && filterdPriceData ) || (onsearch!=null && filterdData) || data;


  return (
    <div className="listpage" >
      <div className="listContainer">
        <div className="wrapper">
          {/* <Filter/> */}
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
          <input type='number' id='minprice' name='minprice' placeholder='any' onChange={(e)=>{setseachprice(e.target.value)
            setpriceflag(true)
          }}/>
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
          <button onClick={openMap}>Open Map</button>
          {showwitchData.map((item)=><Card key={item.id} item={item}/>)}
        </div>
      </div>
      <div className="mapContainer" ref={map}>
        <Map items={data} refrence={map}/>
      </div>
    </div>
  )
}

export default Listpage