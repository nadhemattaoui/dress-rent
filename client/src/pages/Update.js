
import React, { useRef } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Update() {
  
  const navigate=useNavigate()
    const updaterobe=(e)=>{
      e.preventDefault()
      
    const token=JSON.parse(localStorage.getItem("user")).token
      axios.post('http://localhost:8000/api/robes/update',{name:nrobe.current.value,newname:nnrobe.current.value},{
        headers: {
        'Authorization': `Bearer ${token}` 
        }})
        navigate('/robes')
    }
      const nrobe= useRef()
      const nnrobe=useRef()
    
  return (
    <div>
      <form>
<label>Name</label>
        <input type ="name" placeholder="enter Robe's name"ref={nrobe} ></input>
        
<label>New Name</label>
        <input type ="name" placeholder="enter  new name's robe" ref={nnrobe}></input>
        
        <button onClick={updaterobe}>Update</button>
        </form>
    </div>
  )
}

export default Update
