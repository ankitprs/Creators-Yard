import Channel from '../models/channel.model.js'
import mailService from '../services/mailService.js'
import youtubeApiService from '../services/youtubeApiService.js'
import Video from '../models/video.model.js';
import gcpService from '../services/gcpService.js'

import dotenv from 'dotenv'
dotenv.config()

class ChannelDataController {
  getChannelForUser = async (req, res) => {
    const { email_id } = req;
    try {
      const channels = await Channel.find({ editors_email_id: { $in: email_id } },
        { channel_id: 1, channel_icon_url: 1, channel_name: 1 })
      res.json(channels);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  getListOfEditors = async (req, res) => {
    const email_id = req.email_id
    const { channel_id } = req.query;
    try {
      const editors = await Channel.find({ channel_id: channel_id, editors_email_id: { $in: email_id } }, { editors_email_id: 1 })
      console.log(`editors :-> ${editors}`);
      res.json(editors);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  addEditorFromChannel = async (req, res) => {
    const email_id = req.email_id
    const { channel_id, editor_email_id } = req.body;
    try {
      const editors = await Channel.updateOne({ channel_id: channel_id },
        { $push: { editors_email_id: editor_email_id } },
      )
      mailService.editorAddedMail(editor_email_id, email_id)
      res.json(editors)
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  removeEditorFromChannel = async (req, res) => {
    const { channel_id, editor_email_id } = req.body;
    try {
      const editors = await Channel.updateOne({ channel_id: channel_id }, {
        $pull: {
          editors_email_id: editor_email_id
        }
      })
      res.json(editors);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  // youtube call
  createChannel = async (req, res) => {
    const email_id = req.email_id
    try {
      const { authorization_code } = req.body
      const { tokens } = await youtubeApiService.exchangeTokenRequest(authorization_code);
      const { access_token, refresh_token, expiry_date } = tokens
      const { channel_id, channel_name, channel_icon_url } = await youtubeApiService.getChannelDetails(access_token)
      console.log(`channel_id : ${channel_id} `);

      const newChannel = new Channel({
        channel_id: channel_id,
        channel_name: channel_name,
        channel_icon_url: channel_icon_url,
        owner_email_id: email_id,
        editors_email_id: [email_id],
        access_token: access_token,
        refresh_token: refresh_token,
        expires_in: expiry_date,
      })
      newChannel.save()
      res.status(200).json({ data: "Saved Successfully" })
    } catch (error) {
      console.log(error);
      res.send({ error: `Error ${error}` })
    }
  }

  getOauth2Url = async (req, res) => {
    return res.json(await youtubeApiService.getOauth2Url())
  }

  //  @ Main Section
  publishVideo = async (req, res) => {
    const {email_id} = req
    const { video_id  } = req.body
    try {
      const video = await Video.findOne({ video_id: video_id });
      const channel = await Channel.findOne({ channel_id: video.channel_id }, { refresh_token: 1, owner_email_id: 1 })
      if (owner_email_id !== email_id) return res.send({ eror: "Unauthorized User" })

      const signedUrl = await gcpService.generateSignedUrl(video.video_ref)
      const respo = await youtubeApiService.publishVideo(video.title, video.description, channel.refresh_token, signedUrl);
      res.send(respo)
    } catch (error) {
      res.send({ error: `Error ${error}` })
    }
  }
}

const channelDataController = new ChannelDataController
export default channelDataController