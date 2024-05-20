import { prisma } from '../config/prismaClient';
import dotenv from 'dotenv'
dotenv.config()


const getChannelForUser = async (email_id: string) => {
  const channels = await prisma.editorsOnChannel.findMany({
    where: {
      editorEmailId: email_id
    },
    select: {
      channel: true
    }
  })

  return channels.map(channel => {
    return {
      channelId: channel.channel.channelId,
      channelName: channel.channel.channelName,
      channelIconUrl: channel.channel.channelIconUrl
    }
  })
}

const getListOfEditors = async (channel_id: string) => {
  return await prisma.editorsOnChannel.findMany({
    where: {
      channelChannelId: channel_id
    }
  })
}

const addEditorFromChannel = async (channel_id: string, editor_email_id: string) => {
  return await prisma.editorsOnChannel.create({
    data: {
      editorEmailId: editor_email_id,
      channelChannelId: channel_id
    }
  })
}

const removeEditorFromChannel = async (channel_id: string, editor_email_id: string) => {
  return await prisma.editorsOnChannel.delete({
    where: {
      editorEmailId_channelChannelId: {
        channelChannelId: channel_id,
        editorEmailId: editor_email_id
      }
    }
  })
}

// youtube call
const createChannel = async (channel_id: string,
  channel_name: string,
  channel_icon_url: string,
  email_id: string,
  access_token: string,
  refresh_token: string,
  expiry_date: string
) => {

  const channel = await prisma.channel.create({
    data: {
      channelId: channel_id,
      channelName: channel_name,
      channelIconUrl: channel_icon_url,
      ownerEmailId: email_id,
      accessToken: access_token,
      refreshToken: refresh_token,
      expiresId: expiry_date
    }
  })

  await prisma.editorsOnChannel.create({
    data: {
      channelChannelId: channel_id,
      editorEmailId: email_id
    }
  })
  return channel
}

const getVideoWithChannelTokens = async (video_id: string) => {
  return await prisma.video.findUnique({
    where: {
      videoId: video_id
    },
    select: {
      videoId: true,
      title: true,
      description: true,
      videoRef: true,
      channel: true
    }
  })
}

export { getChannelForUser, getListOfEditors, addEditorFromChannel, removeEditorFromChannel, createChannel, getVideoWithChannelTokens }