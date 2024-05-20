import React, { useEffect, useState } from 'react';
import { VideoCard } from '../components';
import { useNavigate, useParams } from 'react-router-dom';
import apiService from '../gcp/data'
import { FaCloudUploadAlt } from "react-icons/fa";
import AddEditorModel from '../components/models/AddEditorModel'
import NewProjectModel from "@/components/models/NewProjectModel"
import ProjectCard from '@/components/cards/ProjectCard';



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


const Dashboard = () => {
  const navigator = useNavigate()
  const [videos, setVideos] = useState([])
  const { channel_id } = useParams()
  const [open, setOpen] = useState(false);
  const [openNewProject, setOpenNewProject] = useState(false)

  const onClickUpload = () => {
    navigator(`/dashboard/${channel_id}/upload`)
  }

  const onClickAddEditor = () => {
    setOpen(true)
  }

  useEffect(() => {
    apiService.getVideosForChannel(channel_id).then((vids) => {
      if (vids) setVideos(vids)
    })
  }, [])

  return (
    <div className="">
      <div className=" px-4 flex flex-col">

        <div className='flex justify-between border-[#30363C] border-b-[1px] mb-[20px] py-[10px]'>
          <button className='px-[20px] h-10 bg-[#2A903B] rounded-[20px]' onClick={() => setOpenNewProject(e => !e)}>New Project</button>
          <div className='flex'>
            <button className=' px-[20px] mx-[10px]  h-10  bg-[#2563EB] rounded-[20px]' onClick={onClickAddEditor}>Add Editors</button>
            <a href={`/dashboard/channel/${channel_id}/editors`} className=' px-[20px]  mx-[10px] h-10 bg-[#292E36] rounded-[20px] flex items-center'>All Editors</a>
          </div>
        </div>

        {/* <UploadCard onClickUpload={onClickUpload} /> */}
        {open ? <AddEditorModel isOpen={open} onCloseClick={() => setOpen(e => !e)} /> : <></>}
        {videos.map((video_) => (
          <div onClick={() => navigator(`/dashboard/channel/${channel_id}/video/${video_.video_id}`)} key={video_.id} className="mb-4">
            <VideoCard video={video_} />
          </div>
        ))}
      </div>
      {openNewProject ? <NewProjectModel isOpen={openNewProject} onCloseClick={() => setOpenNewProject(e => !e)} /> : <></>}
    </div>
  );
};

export default Dashboard;
