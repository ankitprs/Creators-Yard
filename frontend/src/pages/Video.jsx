import React, { useEffect, useState } from 'react';
import apiService from '../aws/data';
import { useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'


const VideoPage = () => {
  const [video, setVideo] = useState({})
  const video_id = useParams()

  useEffect(() => {
    apiService.getVideoDetails(video_id).then((vid) => {
      if (vid) setVideo(vid)
    })
  }, [])

  return (
    <div className="bg-gray-900 text-white min-h-screen p-6">
      {/* Video View */}
      <div className="w-full rounded-lg overflow-hidden mb-6">
        <ReactPlayer
          url={"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"}
        // url={video.video_s3_url}
        />
      </div>

      {/* Video Title */}
      <h1 className="text-2xl font-bold mb-2">{video.title}</h1>

      {/* Video Description */}
      <p className="text-gray-400 mb-6">
        {video.description}
      </p>

      {/* Publish to YouTube Button */}
      <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
        Publish to YouTube
      </button>
    </div>
  );
};

export default VideoPage;
