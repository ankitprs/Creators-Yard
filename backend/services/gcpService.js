import admin from '../config/firebaseConfig.js'
import {  getDownloadURL } from 'firebase-admin/storage';

const F_BUCKET_NAME = "channelnest.appspot.com"


class GcpService {

  async getVideoMetadata(signedUrl) {
    // 2. Get video metadata from S3 object
    // const headObjectResponse = await axios.head(signedUrl);
    // const videoData = headObjectResponse.headers;
    // return videoData;
    return "meta Data"
  }

  async generateSignedUrl(video_ref) {
    // 1. Generate pre-signed URL for the video object in S3
    console.log(`video_ref:- ${video_ref}`)
    video_ref = video_ref.slice(1);

    const fileRef =  admin.storage().bucket(`${F_BUCKET_NAME}`).file(video_ref)

    try {
      const url = await getDownloadURL(fileRef)
      console.log(url);
      return url
    } catch (error) {
      console.log(error);
    }
  }

}

const gcpService = new GcpService
export default gcpService