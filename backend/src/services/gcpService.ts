import admin from '../config/firebaseConfig'
import { getDownloadURL } from 'firebase-admin/storage';

const F_BUCKET_NAME = "channelnest.appspot.com"


class GcpService {
  async getVideoMetadata(signedUrl: string) {
    // 2. Get video metadata from S3 object
    // const headObjectResponse = await axios.head(signedUrl);
    // const videoData = headObjectResponse.headers;
    // return videoData;
    return "meta Data"
  }

  async generateSignedUrl(video_ref: string) {
    video_ref = video_ref.slice(1);
    const fileRef = admin.storage().bucket(`${F_BUCKET_NAME}`).file(video_ref)
    return await getDownloadURL(fileRef)
  }
}

const gcpService = new GcpService
export default gcpService