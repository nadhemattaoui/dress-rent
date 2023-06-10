import React, { useRef, useState } from 'react'

import { Form } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
function Reserve() {
    const startdate=useRef()
    const enddate=useRef()
    const location=useLocation()
   const[total,setTotal]=useState(0)

    
    const confirm=(e)=>{
        e.preventDefault()
        
const days=(new Date (enddate.current.value)-new Date(startdate.current.value))/(1000 * 60 * 60 * 24)

const totalPrice=days*location.state

if (totalPrice>0){
    setTotal(totalPrice)
}

 
    }
return (
    

                <div>
                    <div >
                    <br/>
                        <Form.Group controlId="dob">
                            <Form.Label>Pick Date</Form.Label>
                            <Form.Control type="date" name="dob" onChange={confirm}  ref={startdate}/>
                            <br/>

                            <Form.Label>Return Date</Form.Label>
                            <Form.Control type="date" name="dob" onChange={confirm} ref={enddate}/>
                        </Form.Group>
                        
                        <br/>
                        <br/>

                        <form>
                        <Link to='/robes'><button >confirm</button></Link>
                        </form>
                    </div>
<br/>
                      <h1> the total is : {total}  dt </h1>  
                </div>
        
  )
}

export default Reserve
