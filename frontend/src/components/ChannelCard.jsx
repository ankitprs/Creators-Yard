import React from 'react';

const ChannelCard = ({ channel }) => {
  return (
    <div className="max-w-md p-2  border rounded-lg shadow sm:p-3 bg-gray-800 border-gray-700 hover:bg-gray-850 hover:bg-gray-750 transition-colors duration-300">
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0">
          <img
            className="w-8 h-8 rounded-full"
            src={channel.channel_icon_url}
            alt="Neil image"
          />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium  truncate text-white">
            {channel.channel_name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChannelCard;
