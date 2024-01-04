import React, { useEffect, useState } from 'react';
import { VideoCard } from '../components';
import { useNavigate, useParams } from 'react-router-dom';
import apiService from '../gcp/data'
import { FaCloudUploadAlt } from "react-icons/fa";
import AddEditor from '../components/AddEditor'



const Dashboard = () => {
  const navigator = useNavigate()
  const [videos, setVideos] = useState([])
  const { channel_id } = useParams()
  const [open, setOpen] = useState(false);

  const handleOpen = (bool_val, email_id) => {
    setOpen(bool_val)
    apiService.addEditors(channel_id, email_id)
  };

  useEffect(() => {
    apiService.getVideosForChannel(channel_id, "ankitprasad.119@gmail.com").then((vids) => {
      console.log(`videos : - ${JSON.stringify(vids)}`);
      if (vids) setVideos(vids)
    })
  }, [])

  return (
    <main className="flex p-4 overflow-x-auto">
      <div className="p-4">
        <div className='flex'>
          <button className='w-full m-1 h-10 mb-4 bg-blue-500 rounded-lg' onClick={() => { setOpen(true) }}>Add Editors</button>
          <button className='w-full m-1 h-10 mb-4 bg-gray-300 rounded-lg' onClick={() => navigator(`dashboard/channel/${channel_id}/editors`)}>All Editors</button>
        </div>
        {open ? <AddEditor handleOpen={handleOpen} /> : <></>}
        <div className="mb-3 w-full max-w-sm bg-gray-900 text-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300" onClick={() => navigator(`/dashboard/${channel_id}/upload`)}>
          <FaCloudUploadAlt className='w-20 mx-36 h-20 mt-2' />
          <p className='w-full mx-36 pb-2'>
            Upload Video
          </p>
        </div>
        {videos.map((video_) => (
          <div onClick={() => navigator(`/dashboard/video/${video_.video_id}`)} key={video_.id} className="mb-4">
            <VideoCard video={video_} />
          </div>
        ))}
      </div>
    </main>
  );
};

export default Dashboard;
