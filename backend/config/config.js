import mongoose from 'mongoose';
mongoose.connect(process.env.MONGODB_CONNECTION_URL);

export default mongoose;