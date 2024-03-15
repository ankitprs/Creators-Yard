import React from 'react';
import VideoThumbnail from '../assets/videothumbnail.png'

const VideoCard = ({ video }) => {
  // Trim the description to a certain length (e.g., 100 characters)
  const trimmedDescription = video.description.length > 100
    ? video.description.substring(0, 100) + '...'
    : video.description;
 
  return (
    <div className="flex h-72 w-full bg-gray-900 text-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 mb-4">
      <img
        className="w-full h-full object-cover bg-black"
        src={VideoThumbnail}
        alt="thumbnail"
      />
      <div className="w-full h-full p-4">
        <h2 className="text-xl font-bold mb-2">{video.title}</h2>
        <p className="text-gray-400 overflow-hidden" style={{ maxHeight: '150px' }}>
          {trimmedDescription}
        </p>
      </div>
    </div>
  );
};

export default VideoCard;
