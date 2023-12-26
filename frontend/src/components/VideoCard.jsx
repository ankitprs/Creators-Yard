import React from 'react';

const VideoCard = ({ video }) => {
  // Trim the description to a certain length (e.g., 100 characters)
  const trimmedDescription = video.description.length > 100
    ? video.description.substring(0, 100) + '...'
    : video.description;

  return (
    <div className="w-full max-w-sm bg-gray-900 text-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 mb-4">
      <img
        className="w-full object-cover"
        src={video.thumbnailUrl}
        alt={video.title}
      />
      <div className="w-full p-4">
        <h2 className="text-xl font-bold mb-2">{video.title}</h2>
        <p className="text-gray-400 overflow-hidden" style={{ maxHeight: '150px' }}>
          {trimmedDescription}
        </p>
      </div>
    </div>
  );
};

export default VideoCard;
