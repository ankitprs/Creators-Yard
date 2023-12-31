import React, { useEffect } from 'react';
import apiService from '../gcp/data';
import { FcProcess } from "react-icons/fc";


const Callback = () => {
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

    if (authorization_code) {
      apiService.createChannel(authorization_code)
      window.location.href = '/';
    }


  }, []);

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
