import axios from "axios"
import { useRef } from "react"
import { useNavigate } from "react-router-dom"

function Deleterb() {
  const navigate=useNavigate()
  const deleterobe=(e)=>{
    e.preventDefault()
    const token=JSON.parse(localStorage.getItem("user")).token
    axios.post('http://localhost:8000/api/robes/deleterb',{name:robename.current.value},{
      headers: {
      'Authorization': `Bearer ${token}` 
      }}
      )
      navigate('/robes')
    }
    const robename=useRef()
  return (
    <div>
      
    <form>
<label>Name of robe to delete</label>
        <input type ="text" placeholder="enter the robe's to delete" ref={robename} ></input>
        <button onClick={deleterobe}>Delete</button>
        </form>
    </div>
  )
}

export default Deleterb
