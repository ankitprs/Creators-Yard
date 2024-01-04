import mongoose from 'mongoose'


const videoSchema = new mongoose.Schema({
  video_id: { type: String, required: true, unique: true },
  channel_id: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  video_ref: { type: String, required: true },
  email_id: { type: String, required: true },
})

const Video = mongoose.model('Video', videoSchema);

export default Video;