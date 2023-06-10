import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { add } from '../redux/slice/authSlice'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Add() {

const [robe,setRobe]=useState()
const navigate=useNavigate()
const addrobe=async(e)=>{
        e.preventDefault()
        const token=JSON.parse(localStorage.getItem("user")).token
        try{
                await axios.post('http://localhost:8000/api/robes/add',robe,{
                headers: {
                'Authorization': `Bearer ${token}` 
                
                }})
                
                

                navigate('/robes')
        
        }catch (error){
        console.log(error)
        }
        
        }
        

        
return (
    <div>
    
    <form>
<label>name</label>
        <input type ="name" placeholder="enter robe name"onChange={(e)=>{
        setRobe({...robe,name:e.target.value})}} ></input>
<label >price</label>
<input type="number"  placeholder="enter the price " min="0" max="600"onChange={(e)=>{
        setRobe({...robe,price:e.target.value})}}/>
        <label>Rate</label>
<input type="number"  placeholder="enter the robe's rating " min="0" max="10"onChange={(e)=>{
        setRobe({...robe,rate:e.target.value})}}/>
        <label>description</label>
        <input type ="string" placeholder="enter the description" onChange={(e)=>{
        setRobe({...robe,description:e.target.value})}}></input>
        <label>photo</label>
        <input type ="string" placeholder="enter image's URL" onChange={(e)=>{
        setRobe({...robe,image:e.target.value})}}></input>
        <button onClick={addrobe}>Add </button>
        </form>
    </div>
  )
}

export default Add
