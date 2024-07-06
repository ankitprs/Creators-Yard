import { prisma } from '../config/prismaClient';


const getVideosFromChannelId = async (channel_id: string) => {
  return prisma.video.findMany({
    where: {
      channelChannelId: channel_id
    },
    take: 10
  })
}

const getVideoFromVideoId = async (video_id: string) => {
  return prisma.video.findUnique({
    where: {
      videoId: video_id
    }
  })
}

const uploadVideo = async (video_id: string, channel_id: string, project_id: string, title: string, description: string, video_ref: string, email_id: string) => {
  return await prisma.video.create({
    data: {
      videoId: video_id,
      channelChannelId: channel_id,
      projectProjectId: project_id,
      title: title,
      description: description,
      videoRef: video_ref,
      createdUserEmailId: email_id
    }
  })
}

const getPresigninUrl = async (video_id: string) => {
  return "presignedGETURL"
}

export { getVideoFromVideoId, getPresigninUrl, getVideosFromChannelId, uploadVideo };