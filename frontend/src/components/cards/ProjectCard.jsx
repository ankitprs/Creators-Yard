import React from 'react'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

function ProjectCard({ project_name, user_name, photo_url, created_at }) {
  return (
    <div className='bg-[#0E1117] rounded-[20px]  m-[12px] p-[16px]'>
      <div className='flex flex-col ml-[12px]'>
        <div className='flex items-center bg-[#31363d] rounded-[20px] h-fit p-[5px] w-fit'>
          <Avatar className="h-[28px] w-[28px]">
            <AvatarImage src={photo_url} alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className='px-[10px] text-[14px]'>
            {user_name}
          </div>
        </div>
        <div className=' my-[18px] text-[24px]'> {project_name}</div>
        <div className='flex w-full items-end justify-end text-[#BCBCBC]'>Created at: {created_at}</div>
        <div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard