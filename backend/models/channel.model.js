import mongoose from 'mongoose'

const channelSchema = new mongoose.Schema({
  channel_id: { type: String, required: true, unique: true },
  channel_name: { type: String },
  channel_icon_url: { type: String },
  owner_email_id: { type: String },
  editors_email_id: { type: [String], default: [] },
  access_token: { type: String },
  refresh_token: { type: String },
  expires_in: { type: String }
})

const Channel = mongoose.model('Channel', channelSchema);

export default Channel;