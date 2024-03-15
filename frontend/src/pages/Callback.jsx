import React, { useEffect } from 'react';
import apiService from '../gcp/data';
import { FcProcess } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import authService from '../gcp/auth'


const Callback = () => {
  const navigator = useNavigate()
  useEffect(() => {
    // Function to extract URL parameters
    const getParameterByName = (name, url) => {
      if (!url) url = window.location.href;
      name = name.replace(/[\[\]]/g, '\\$&');
      const regex = new RegExp(`[?&]${name}(=([^&#]*)|&|#|$)`),
        results = regex.exec(url);
      if (!results) return null;
      if (!results[2]) return '';
      return decodeURIComponent(results[2].replace(/\+/g, ' '));
    };

    // Extract access token from the callback URL
    const authorization_code = getParameterByName('code');


    fetchUser(authorization_code)

  }, []);

  async function fetchUser(authorization_code) {
    const userData = await authService.getCurrentUser()
    if (userData) {
      // dispatch(login({ userData: userData }))
      apiService.authToken = userData.token;
    } else {
      // dispatch(logout())
    }
    createCall(authorization_code)
  }

  async function createCall(authorization_code) {
    if (authorization_code) {
      await apiService.createChannel(authorization_code)
      navigator('/dashboard')
    }
  }

  return (
    <div className="bg-gray-800 text-white min-h-screen flex items-center justify-center">
      <div className="text-center">
        <FcProcess className='w-full h-20 m-auto' />
        <h1 className="text-4xl font-bold mb-4">Processing</h1>
      </div>
    </div>
  );
};

export default Callback;
