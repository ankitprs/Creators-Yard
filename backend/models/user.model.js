import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  email_id: { type: String, required: true, unique: true },
  display_name: { type: String, required: true },
  icon_url: { type: String, default: "" },
  is_premium: { type: Boolean, required: true, default: false }
});

const User = mongoose.model('User', userSchema);

export default User;
