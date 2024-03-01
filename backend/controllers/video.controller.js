import Video from '../models/video.model.js';


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
      const video_ref = `/videos/${channel_id}/${video_id}`
      const newVideo = new Video({ video_id, channel_id, title, description, video_ref, email_id })
      const savedVideo = await newVideo.save();
      res.json(savedVideo);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  getPresigninUrl = async (video_id) => {
    return "presignedGETURL"
  }
}

const videoController = new VideoController;
export default videoController;