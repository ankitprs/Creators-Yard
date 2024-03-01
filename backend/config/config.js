import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config()

mongoose.connect(process.env.MONGODB_CONNECTION_URL).then(r =>
    console.log(`MongoDB is connected Successfully with r:- ${r}`)
);

export default mongoose;