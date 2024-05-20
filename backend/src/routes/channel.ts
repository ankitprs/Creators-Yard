import express from 'express';
import mailService from '../services/mailService'
import gcpService from '../services/gcpService'
import youtubeApiService from '../services/youtubeApiService';
import { getChannelForUser, getListOfEditors, addEditorFromChannel, removeEditorFromChannel, createChannel, getVideoWithChannelTokens } from '../controllers/channel.controller'
import { auth, isEditor, isOwner, isPremium } from '../middlewares';
import { Request, Response } from 'express';



const router = express.Router();

router.post('/oauth2_url', auth, isPremium, async (req: Request, res: Response) => {
  const authorizationUrl = await youtubeApiService.getOauth2Url()
  return res.json(authorizationUrl)
})

router.post('/create', auth, isPremium, async (req: Request, res: Response) => {
  try {
    const { email_id } = req.headers
    const { authorization_code } = req.body
    const { tokens } = await youtubeApiService.exchangeTokenRequest(authorization_code);
    const { access_token, refresh_token, expiry_date } = tokens
    const { channel_id, channel_name, channel_icon_url } = await youtubeApiService.getChannelDetails(access_token)

    const newChannel = await createChannel(channel_id,
      channel_name, channel_icon_url,
      email_id as string,
      access_token, refresh_token, expiry_date.toString())

    res.status(200).json({ data: "Saved Successfully" })
  } catch (error) {
    console.log(error);
    res.send({ error: `Error ${error}` })
  }
});

router.post('/add_editors', auth, isOwner, async (req: Request, res: Response) => {
  try {
    const { email_id } = req.headers
    const { channel_id, editor_email_id } = req.body;

    const editors = await addEditorFromChannel(channel_id, editor_email_id)
    await mailService.editorAddedMail(editor_email_id, email_id as string)

    res.json(editors)
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

router.post('/remove_editors', auth, isOwner, async (req: Request, res: Response) => {
  try {
    const { email_id } = req.headers
    const { channel_id, editor_email_id } = req.body;

    if (email_id == editor_email_id)
      return Error("Owner can't be deleted!!")

    const editors = removeEditorFromChannel(channel_id, editor_email_id)
    res.json(editors);

  } catch (error) {
    res.status(500).json({ message: error });
  }
});

router.get('/list_editors', auth, isOwner, async (req: Request, res: Response) => {
  try {
    const { channel_id } = req.query;
    const editors = await getListOfEditors(channel_id as string)

    res.json(editors);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

router.get('/list_channels', auth, async (req: Request, res: Response) => {
  try {
    const { email_id } = req.headers
    const channels = await getChannelForUser(email_id as string)

    res.json(channels);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

router.get('/owner_email_id', auth, isEditor, function (req, res) {
  res.render('index', { title: 'yes' });
});


//  @ Main Section
router.post('/publish', auth, isOwner, async (req: Request, res: Response) => {
  try {
    const { video_id } = req.body

    const video = await getVideoWithChannelTokens(video_id)
    if (!video)
      return Error("Something went wrong")

    const signedUrl = await gcpService.generateSignedUrl(video?.videoRef ?? "")
    if (!signedUrl)
      return Error("Something went wrong")

    // await youtubeApiService.refreshToken(channel.refresh_token, channel.access_token);
    const respo = await youtubeApiService.publishVideo(video.title, video.description ?? "", video.channel.accessToken, signedUrl);
    res.send(respo)
  } catch (error) {
    res.send({ error: `Error ${error}` })
  }
});


export default router;
