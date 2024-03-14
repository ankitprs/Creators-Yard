import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config()

try {
  mongoose.connect(process.env.MONGODB_CONNECTION_URL).then(r =>
    console.log(`MongoDB is connected Successfully with r:- ${r}`)
  );
} catch (error) {
  console.log(` ---- mongoogse connection error ----- ${error}`);
}

export default mongoose;