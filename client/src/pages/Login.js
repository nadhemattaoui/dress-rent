import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../redux/slice/authSlice'
import { useNavigate } from 'react-router-dom'

function Login() {
const [userData,setUser]=useState()
const dispatch=useDispatch()
const{user,loading,error,message}=useSelector(state=>state.auth)
        const signin=(e)=>{
        e.preventDefault()
    dispatch (login(userData))

        }
        const navigate=useNavigate()
        useEffect(()=>{
        if(user){
                navigate('/robes')
        }
        },[user])
return (

        <form>
<label>email</label>
        <input type ="email" placeholder="enter your email" onChange={(e)=>{
        setUser({...userData,email:e.target.value})}}></input>
        <label>password</label>
        <input type ="password" placeholder="enter your password" onChange={(e)=>{
        setUser({...userData,password:e.target.value})
        }}></input>
        <button onClick={signin}>login</button>
        </form>

)
}

export default Login;
