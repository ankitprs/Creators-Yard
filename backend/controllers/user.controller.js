import User from '../models/user.model.js';


class UserController {

  createUser = async (req, res) => {
    const { email_id, display_name } = req.body;

    try {
      const newUser = new User({ email_id, display_name });
      const savedUser = await newUser.save();
      res.status(201).json(savedUser);
    } catch (error) {
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

  isUserPremium = async (req, res) => {
    const { email_id } = req.body;
    try {
      const is_premium = await User.findOne({ email_id: email_id }, { is_premium: 1 });
      res.json({
        email_id: email_id,
        is_premium: is_premium
      })
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}
const userController = new UserController;
export default userController;
