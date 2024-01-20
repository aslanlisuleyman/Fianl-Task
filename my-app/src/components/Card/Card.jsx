import React, { useContext } from 'react'
import MainContext from '../../context/context'
import { Link } from 'react-router-dom'

const Card = ({item}) => {
    const{deleteHandler,addWish,addBasket}=useContext(MainContext)
  return (
    <div className='kart'>
        <Link to={`/${item._id}`} ><img src={item.image} alt="" /></Link>
               
               <h4>{item.name}</h4>
               <p>${item.price}.00</p>
               <div style={{display:'flex',gap:'10px',justifyContent:'center'}}>
                <button onClick={()=>{
                    addBasket(item)
                }} className='btn btn-success'>Add Basket</button>
                <button onClick={()=>{
                    deleteHandler(item._id)
                }} className='btn btn-danger'>Delete</button>
                <button onClick={()=>{
                    addWish(item)
                }} className='btn btn-info '>Add Wish</button>
               </div>
             </div>
  )
}

export default Card