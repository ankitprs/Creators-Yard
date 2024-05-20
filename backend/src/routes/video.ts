import express from 'express';
import { Request, Response } from 'express';
import { getVideoFromVideoId, getVideosFromChannelId, uploadVideo } from '../controllers/video.controller'
import { auth, isEditor } from '../middlewares';


const router = express.Router();

router.get('/channel_id/:channel_id', auth, async (req: Request, res: Response) => {
  try {
    const { channel_id } = req.params;

    const videos = await getVideosFromChannelId(channel_id)
    res.json(videos);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});


router.get('/video_id/:video_id', auth, async (req: Request, res: Response) => {
  const { video_id } = req.params;
  try {
    const video = await getVideoFromVideoId(video_id);
    res.json(video);
  } catch (error) {
    res.status(500).json({ message: error });
  }
}
);

router.post('/upload', isEditor, async (req: Request, res: Response) => {
  try {
    const { channel_id, video_id, title, description, email_id, project_id } = req.body;
    const video_ref = `/videos/${channel_id}/${video_id}`

    const newVideo = await uploadVideo(video_id, channel_id, project_id, title, description, video_ref, email_id)
    res.json(newVideo);
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

router.get("/downloadUrl", async (req: Request, res: Response) => {

})


export default router;