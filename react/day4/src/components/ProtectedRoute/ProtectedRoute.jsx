import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
      const isAuth = useSelector(state => state.auth.isAuth)
    console.log(isAuth);
    
    if(!isAuth){
       return <Navigate to='/login'></Navigate>
    }
  return (
    <Outlet/>
  )
}

export default ProtectedRoute