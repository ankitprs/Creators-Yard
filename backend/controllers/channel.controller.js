import Channel from '../models/channel.model.js'
import mailService from '../services/mailService.js'
import youtubeApiService from '../services/youtubeApiService.js'
import dotenv from 'dotenv'
dotenv.config()

class ChannelDataController {
  getChannelForUser = async (req, res) => {
    const { email_id } = req.query;
    try {
      const channels = await Channel.find({ editors_email_id: { $in: email_id } },
        { channel_id: 1, channel_icon_url: 1, channel_name: 1 })
      res.json(channels);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  getListOfEditors = async (req, res) => {
    const { channel_id, email_id } = req.query;
    try {
      const editors = await Channel.find({ channel_id: channel_id, editors_email_id: { $in: email_id } }, { editors_email_id: 1 })
      console.log(`editors :-> ${editors}`);
      res.json(editors);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  addEditorFromChannel = async (req, res) => {
    const { channel_id, editor_email_id } = req.body;
    try {
      const editors = await Channel.updateOne({ channel_id: channel_id },
        { $push: { editors_email_id: editor_email_id } },
      )
      mailService.editorAddedMail(editor_email_id)
      res.json(editors);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  removeEditorFromChannel = async (req, res) => {
    const { channel_id, editor_email_id } = req.body;
    try {
      const editors = await Channel.updateOne({ channel_id: channel_id }, {
        $pullAll: {
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
    try {
      const { authorization_code, email_id } = req.body
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


  // @TODO
  publishVideo = async (req, res) => {

    const { YOUTUBE_VIDEO_TITLE, YOUTUBE_VIDEO_DESCRIPTION, S3_VIDEO_KEY, access_token } = req.body
    try {
      const respo = await youtubeApiService.publishVideo(S3_VIDEO_KEY, YOUTUBE_VIDEO_TITLE, YOUTUBE_VIDEO_DESCRIPTION, access_token);
      res.send(respo)
    } catch (error) {
      res.send({ error: `Error ${error}` })
    }
  }
}

const channelDataController = new ChannelDataController
export default channelDataController