import React, { useState } from 'react';


const DarkModeFormDialog = ({ handleOpen }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    handleOpen(false, email)
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-80 z-50">
      <div className="bg-gray-800 text-white rounded-lg p-8">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 mt-1 text-sm rounded-md bg-gray-700 text-white focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Enter Editors Email Id"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-sm font-medium bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default DarkModeFormDialog;
