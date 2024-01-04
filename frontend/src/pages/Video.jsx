import React, { useEffect, useState } from 'react';
import apiService from '../gcp/data';
import { useParams } from 'react-router-dom'
import { ref, getDownloadURL } from 'firebase/storage';
import { storage } from '../conf/conf'
import Plyr from "plyr-react"
import "plyr-react/plyr.css"

const VideoPage = () => {
  const [video, setVideo] = useState({})
  const { video_id } = useParams()
  const [streamableUrl, setStreamableUrl] = useState("");

  useEffect(() => {
    apiService.getVideoDetails(video_id).then((vid) => {
      console.log(vid);
      if (vid) setVideo(vid)

      const video_ref = ref(storage, vid.video_ref)
      getDownloadURL(video_ref).then((downloadURL) => {
        setStreamableUrl(downloadURL)
        console.log(`downloadURL ${downloadURL}`)
      });
    });
  }, [])

  const publishVideo = async (video_id) => {
    console.log('called');
    await apiService.publishVideoToYT(video_id, "ankitprasad.119@gmail.com");
  }

  const videoSrc = {
    type: "video",
    sources: [
      {
        src:
          streamableUrl,
        type: "video/mp4",
      }]
  };


  return (
    <div className="bg-gray-900 text-white min-h-screen p-6">
      {/* Video View */}
      <div className=" h-1/2 w-1/2 rounded-lg overflow-hidden mb-6">
        {/* <ReactPlayer
          url={streamableUrl}
        /> */}
        <Plyr
          options={{
            controls: [
              "play-large",
              "play",
              "rewind",
              "fast-forward",
              "progress",
              "current-time",
              "mute",
              "volume",
              "captions",
              "settings",
              // "pip",
              "fullscreen"
            ],
            captions: { active: true, language: "auto", update: true },
            previewThumbnails: { enabled: false, src: "" }
          }}
          source={videoSrc}
        />
      </div>

      {/* Video Title */}
      <h1 className="text-2xl font-bold mb-2">{video.title}</h1>

      {/* Video Description */}
      <p className="text-gray-400 mb-6">
        {video.description}
      </p>

      {/* Publish to YouTube Button */}
      <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={publishVideo}>
        Publish to YouTube
      </button>
    </div>
  );
};

export default VideoPage;
