import React, { useEffect, useState } from 'react'
import ChannelCard from './ChannelCard';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const ChannelSidebar = ({ channels, onAuthClick }) => {
  const isSidebarOpen = useSelector((state) => state.sidebar.isSidebarOpen);
  const navigator = useNavigate()

  return (
    <div
      className={`w-64 bg-gray-800 text-white p-4 ${isSidebarOpen ? 'block' : 'hidden'
        } dark:bg-gray-900`}
    >
      <a>
        <div key={0} className="mb-2">
          <button onClick={onAuthClick} className="w-48 p-2 border rounded-lg shadow-md sm:p-3 bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-green-500 hover:to-blue-600 transition-colors duration-300 flex items-center space-x-4">
            <div className="flex-shrink-0">
              <img
                src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M19 11h-6V5h-2v6H5v2h6v6h2v-6h6v-2z' fill='white'/></svg>"
                alt="Plus Icon"
              />
              <i className="fas fa-plus text-white text-xl"></i> {/* Font Awesome plus icon */}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold truncate text-white">
                Create Channel
              </p>
            </div>
          </button>
        </div>
      </a>
      {channels.map((channel) => (
        <div onClick={() => navigator(`/dashboard/channel/${channel.channel_id}`)} key={channel.channel_id} className="mb-2" t>
          <ChannelCard channel={channel} />
        </div>
      ))}
    </div>
  )
}

export default ChannelSidebar