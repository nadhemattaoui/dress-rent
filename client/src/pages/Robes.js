import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './Card';
import StarRatingComponent from 'react-star-rating-component';
import axios from 'axios';
function Robes() {
  const [price,setPrice]=useState(600)
  const[robes,setRobes]=useState([])
  const handleChange =(e)=>{
  setPrice (e.target.value)
  }
  const filterRobes=robes.filter(robe=>robe.price<=price)
  useEffect(()=>{
    axios.get('http://localhost:8000/api/robes/get').then((res)=>{
      setRobes(res.data)
    })
  },[])
return (
  <div style={{ width: "90%", margin:"auto"}}>
<div className='filtre'>
<input type="range" id="slider" min="100" max="500" value={price} step="10" onChange={handleChange}/> <br />
  price between 100 and {price} dt
  </div>
  
    <div className='cardsord'>
      {filterRobes.map(robe=>{
        return <Card key={robe.name} name={robe.name}rate={robe.rate}description={robe.description}price={robe.price}photo={robe.image}></Card>

      })}



    </div>
    </div>
  )
}

export default Robes
