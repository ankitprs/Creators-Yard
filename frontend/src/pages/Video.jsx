import React, { useEffect, useState } from 'react';
import apiService from '../gcp/data';
import { useParams } from 'react-router-dom'
import { ref, getDownloadURL } from 'firebase/storage';
import { storage } from '../conf/conf'
import Plyr from "plyr-react"
import "plyr-react/plyr.css"
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';


const VideoPage = () => {
  const [video, setVideo] = useState({})
  const { video_id, channel_id } = useParams()
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

  const publishVideo = async () => {
    await apiService.publishVideoToYT(video_id, channel_id);
  }
  const downloadVideo = async () => {

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

    <div className='bg-[#0E1117] rounded-[20px] p-[16px] m-[8px]'>
      <div className='flex flex-col ml-[12px]'>
        <div className='flex items-center bg-[#31363d] rounded-[20px] h-fit p-[5px] w-fit'>
          <Avatar className="h-[28px] w-[28px]">
            <AvatarImage src={"photo_url"} alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className='px-[10px] text-[14px]'>
            {"user_name"}
          </div>
        </div>

        <div className="rounded-xl h-[440px]">

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
            className='h-[440px] w-fit'
          />
        </div>

        <h1 className="text-2xl font-bold mb-2">{"video.title"}</h1>
        <div className='flex w-full  text-[#BCBCBC]'>Created at: {"created_at"}</div>
        <p className="text-gray-400 mb-6">
          {"video.description"}
        </p>
        <div className='flex'>
          <button className='px-[20px] h-10 bg-white text-black rounded-[20px] flex items-center' onClick={downloadVideo}>
            Download
          </button>
          <button className='px-[20px] h-10 bg-[#2A903B] rounded-[20px] flex items-center' onClick={publishVideo}>
            Publish to YouTube
          </button>
        </div>
        <div>
        </div>
      </div>
    </div>
  );
};

export default VideoPage;
