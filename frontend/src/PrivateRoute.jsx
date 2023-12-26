// PrivateRoute.tsx
import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';


const PrivateWrapper = ({ children }) => {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUser() {
      try {
        const auth = true;
        setIsAuthenticated(auth);
      } catch (error) {
        setIsAuthenticated(false);
      }
      setLoading(false);
    }
    fetchUser()
  }, [])

  if (loading) {
    return (<div>Loading....</div>);
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  } else {
    return (<>{children}</>);
  }
};
export default PrivateWrapper;
