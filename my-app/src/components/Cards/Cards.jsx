import React, { useContext } from 'react'
import MainContext from '../../context/context'
import Card from '../Card/Card'
import "./Cards.scss"

const Cards = () => {
    const{filter,searchHandler,handleFilter}=useContext(MainContext)
  return (
    <div className='tap'>

     <div className='bas'>
        <h1>Popular Items</h1>
        <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna <br /> aliqua. Quis ipsum suspendisse ultrices gravida.</p>
        <button onClick={(e)=>{
    handleFilter(e.target.value)
  }} class="btnn">
  Sort
</button>
<label for="myInput" class="label">
  <span class="label-title">Search ...</span>
  <input onChange={(e)=>{
    searchHandler(e.target.value)
  }} id="myInput" class="input" name="text" placeholder="Type something..." type="text"/>
</label>

     </div>
     <div className='karts'>
        {filter.map((item,index)=>(
            <Card key={index} item={item}/>
        ))}
     </div>

    </div>
  )
}

export default Cards