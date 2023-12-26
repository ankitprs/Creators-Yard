import Video from '../models/video.model.js';
import AWS from 'aws-sdk';


class VideoController {

  getVideosFromChannelId = async (req, res) => {
    const { channel_id } = req.params;
    try {
      const videos = await Video.find({ channel_id: channel_id }).limit(10);
      res.json(videos);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  getVideoFromVideoId = async (req, res) => {
    const { video_id } = req.params;
    try {
      const video = await Video.findOne({ video_id: video_id });
      res.json(video);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  uploadVideo = async (req, res) => {
    const { channel_id, video_id, title, description, email_id } = req.body;
    try {
      const video_s3_url = `/videos/${channel_id}/${video_id}`
      const newVideo = new Video({ video_id, channel_id, title, description, video_s3_url, email_id })
      const savedVideo = await newVideo.save();
      const presignedPutUrl = await getPresigninUrl(video_id)
      res.json({
        presignedPutUrl: presignedPutUrl,
        savedVideo: savedVideo
      });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  getPresigninUrl = async (video_id) => {
    var credentials = {
      accessKeyId: process.env.S3_ACCESS_KEY,
      secretAccessKey: process.env.S3_SECRET_KEY
    };
    AWS.config.update({ credentials: credentials, region: 'us-east-1' });
    var s3 = new AWS.S3();

    var presignedURL = s3.putSignedUrl('getObject', {
      Bucket: 'channel_nest',
      Key: `${video_id}.mp4`, //filename
      Expires: 10000 //time to expire in seconds
    });
    return presignedGETURL
  }
}
const videoController = new VideoController;
export default videoController;