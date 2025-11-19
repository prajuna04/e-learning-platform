import React from 'react'
import { userContext } from './ContextProvider'
import { Navigate } from 'react-router-dom';

const ProtectedRoute = () => {
    const {role, authenticated} = useContext(userContext);
  if(!authenticated) {
    return <Navigate to="/login"  />
  }
}

export default ProtectedRoute