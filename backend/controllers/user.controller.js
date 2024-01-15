import User from '../models/user.model.js';
import Channel from '../models/channel.model.js'
import admin from '../config/firebaseConfig.js'

class UserController {

  createUser = async (req, res) => {
    const { email_id } = req.body;

    try {
      const userCalled = await admin.auth().getUserByEmail(email_id);
      if (!userCalled) new new Error('Error')
      const newUser = new User({ email_id, display_name: userCalled.displayName, icon_url: userCalled.photoURL });
      const savedUser = await newUser.save();
      res.status(201).json(savedUser);
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: error.message });
    }
  };

  getUser = async (req, res) => {
    const { email_id } = req.body;
    try {
      const user = await User.findOne({ email_id: email_id });
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };


  // basic function
  isUserPremium = async (email_id) => {
    try {
      const user = await User.findOne({ email_id: email_id }, { is_premium: 1, plan_valid_till: 1 });

      if (user.is_premium == true && plan_valid_till > Date.now())
        return true;
      else
        return false;
    } catch (error) {
      console.log({ message: error.message });
      return false;
    }
  }

  isOwnerOfChannel = async (email_id, channel_id) => {
    try {
      const result = await Channel.findOne({ channel_id: channel_id, owner_email_id: email_id }, { channel_name: 1 });
      if (!result) return false
      else return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  isEditorOfChannel = async (email_id, channel_id) => {
    try {
      const editors = await Channel.find({ channel_id: channel_id, editors_email_id: { $in: email_id } }, { channel_name: 1 })
      if (!result) return false
      else return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  }
}
const userController = new UserController;
export default userController;
