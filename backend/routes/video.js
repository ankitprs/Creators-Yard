import express from 'express';
import VideoController from '../controllers/video.controller.js'
import { auth, isEditor, isOwner } from '../middlewares/index.js';


var router = express.Router();

router.get('/channel_id/:channel_id', auth, VideoController.getVideosFromChannelId);
router.get('/video_id/:video_id', auth, VideoController.getVideoFromVideoId);

router.post('/upload', isEditor, VideoController.uploadVideo);


export default router;