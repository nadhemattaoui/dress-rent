
import './App.css';
import { NavLink, Route, Routes, useNavigate } from 'react-router-dom';
import Login from './pages/Login';

import Register from './pages/Register';
import Add from './pages/Add';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { logout } from './redux/slice/authSlice';
import Update from './pages/Update';
import DeleteUser from './pages/DeleteUser';
import { isDraft } from '@reduxjs/toolkit';
import Reserve from './pages/Reserve';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Robes from './pages/Robes';
import Deleterb from './pages/Deleterb';
function App() {
  const { user } = useSelector(state => state.auth)


  const isAdmin = JSON.parse(localStorage.getItem('user'))?.role === 'admin'
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const signoff = () => {
    dispatch(logout())

  }
  useEffect(() => {
    if (!user) {
      navigate('/login')
    }
  }, [user])

  return (
    <>
<div></div>
      <div className='image'>
        <div className='navbar'>
          <h1>Dress Rental</h1>
          <div className='links'>
            {user ?
              <>
                <NavLink to="/robes"> Our Robes</NavLink>

                {isAdmin && <>
                  <NavLink to='/robes/add'>Add Robe</NavLink>
                  <NavLink to='/robes/deleteRobe'>Delete Robe</NavLink>
                  <NavLink to='/robes/updateRobe'>Update Robe</NavLink>

                  <NavLink to='/admin/deleteuser'>Delete User</NavLink>
                </>
                }

                <button onClick={signoff} className='sign'>Sign off</button>
              </>
              :
              <>

                <NavLink to="/register">register</NavLink>
                <NavLink to="/login">login</NavLink>

              </>
            }

          </div></div>
        <div className='content'>
          <Routes>
            <Route path='/register' element={<Register></Register>}></Route>
            <Route path='/login' element={<Login></Login>}></Route>
            <Route path='/robes' element={<Robes/>}></Route>
            <Route path='/robes/add' element={<Add />}></Route>
            <Route path='/robes/deleteRobe' element={<Deleterb></Deleterb>}></Route>
            <Route path='/robes/updateRobe' element={<Update></Update>}></Route>

            <Route path='/admin/deleteuser' element={<DeleteUser></DeleteUser>}></Route>
            <Route path='/robes/reserve' element={<Reserve></Reserve>}></Route>

          </Routes>
        </div></div>
        <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
