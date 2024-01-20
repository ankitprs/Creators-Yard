import React, { useEffect, useState } from 'react';
import { VideoCard } from '../components';
import { useNavigate, useParams } from 'react-router-dom';
import apiService from '../gcp/data'
import { FaCloudUploadAlt } from "react-icons/fa";
import AddEditor from '../components/AddEditor'



const UploadCard = ({ onClickUpload }) => {
  return (
    <div className="mb-3 p-3 w-full bg-gray-900 text-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300" onClick={onClickUpload}>
      <FaCloudUploadAlt className='m-auto w-24 h-24' />
      <p className='m-auto w-28'>
        Upload Video
      </p>
    </div>
  )
}

const EditorsHandler = ({ onClickAddEditor, onClickEditorsList }) => {
  return (
    <div className='flex'>
      <button className='w-full m-1 h-10 mb-4 bg-blue-500 rounded-lg' onClick={onClickAddEditor}>Add Editors</button>
      <button className='w-full m-1 h-10 mb-4 bg-gray-300 rounded-lg' onClick={onClickEditorsList}>All Editors</button>
    </div >
  )
}

const Dashboard = () => {
  const navigator = useNavigate()
  const [videos, setVideos] = useState([])
  const { channel_id } = useParams()
  const [open, setOpen] = useState(false);

  const handleOpen = (bool_val, email_id) => {
    setOpen(bool_val)
    if (!email_id) return;
    apiService.addEditors(channel_id, email_id)
  };

  const onClickUpload = () => {
    navigator(`/dashboard/${channel_id}/upload`)
  }

  const onClickAddEditor = () => {
    setOpen(true)
  }
  const onClickEditorsList = () => {
    navigator(`/dashboard/channel/${channel_id}/editors`)
  }

  useEffect(() => {
    apiService.getVideosForChannel(channel_id).then((vids) => {
      if (vids) setVideos(vids)
    })
  }, [])

  return (
    <div className="p-4 overflow-x-auto">
      <div className="m-auto p-4 max-w-screen-lg">
        <EditorsHandler onClickEditorsList={onClickEditorsList} onClickAddEditor={onClickAddEditor} />
        {open ? <AddEditor handleOpen={handleOpen} /> : <></>}
        <UploadCard onClickUpload={onClickUpload} />
        {videos.map((video_) => (
          <div onClick={() => navigator(`/dashboard/channel/${channel_id}/video/${video_.video_id}`)} key={video_.id} className="mb-4">
            <VideoCard video={video_} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
