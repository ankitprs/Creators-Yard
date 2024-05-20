import React, { useEffect, useState } from 'react';
import { VideoCard } from '../components';
import { useNavigate, useParams } from 'react-router-dom';
import apiService from '../gcp/data'
import { FaCloudUploadAlt } from "react-icons/fa";
import AddEditorModel from '../components/models/AddEditorModel'
import NewProjectModel from "@/components/models/NewProjectModel"
import ProjectCard from '@/components/cards/ProjectCard';



const Project = () => {
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

        <div className='flex justify-end border-[#30363C] border-b-[1px] mb-[20px] py-[10px]'>
          <button className='px-[20px] h-10 bg-[#2A903B] rounded-[20px] flex items-center' onClick={() => setOpenNewProject(e => !e)}>
            <img src='./src/assets/video_call_icon.svg' alt='icon' />
            Upload Video
          </button>
        </div>

        <VideoCard video={{ video_id: " ", title: "vidoe title", description: "video descrription" }} />

        {open ? <AddEditorModel isOpen={open} onCloseClick={() => setOpen(e => !e)} /> : <></>}
        {videos.map((video_) => (
          <a href={`/dashboard/channel/${channel_id}/video/${video_.video_id}`} key={video_.id} className="mb-4">
            <VideoCard video={video_} />
          </a>
        ))}
      </div>
      {openNewProject ? <NewProjectModel isOpen={openNewProject} onCloseClick={() => setOpenNewProject(e => !e)} /> : <></>}
    </div>
  );
};

export default Project;
