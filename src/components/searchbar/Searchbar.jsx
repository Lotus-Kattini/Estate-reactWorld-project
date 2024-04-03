import { useState } from 'react'
import './searchbar.scss'
import { Link } from 'react-router-dom'
function Searchbar() {

  const types=['buy','rent']
  const [query,setquery]=useState({
    type:'buy',
    location:'',
    maxprice:0,
    minprice:0,
  })

  function switchtype(val){
    setquery((prev)=>({...prev,type:val}))
  }

  return (
    <div className='searchbar'>
      <div className="type">
        {types.map((type)=>
          <button key={type} onClick={()=>switchtype(type)} className={query.type === type ?'active':''}>{type}</button>
        )}
      </div>
      <form action="">
        <input type="text" name='locatoin' placeholder='City Location'/>
        <input type="number" name='minprice' min={0} max={10000} placeholder='Min Price'/>
        <input type="number" name='maxprice' min={0} max={10000} placeholder='Max Price'/>
        <button>
          <Link to={'list'}><img src="/search.png" alt="" /></Link>
        </button>
      </form>
    </div>
  )
}

export default Searchbar