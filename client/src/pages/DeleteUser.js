import React, { useRef } from 'react'
import axios from "axios"

function DeleteUser() {
    
    const deleteuser=(e)=>{
        e.preventDefault()
        
    const token=JSON.parse(localStorage.getItem("user")).token
        axios.post('http://localhost:8000/api/admin/deleteuser',{name:username.current.value},{
            headers: {
            'Authorization': `Bearer ${token}` 
            }})
            
        }
        const username=useRef()
    return (
        <div>
        <form>
    <label>Name of user to delete</label>
            <input type ="text" placeholder="enter the user name to delete" ref={username} ></input>
            <button onClick={deleteuser}>Delete</button>
            </form>
        </div>
    )
    }

export default DeleteUser
