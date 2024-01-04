import axios from 'axios'

const S3_BUCKET_NAME = process.env.S3_BUCKET_NAME


class GcpService {

  async getVideoMetadata(signedUrl) {
    // 2. Get video metadata from S3 object
    const headObjectResponse = await axios.head(signedUrl);
    const videoData = headObjectResponse.headers;
    return videoData;
  }

  async generateSignedUrl(video_ref) {
    // 1. Generate pre-signed URL for the video object in S3
    return "video_ref"
  }

}

const gcpService = new GcpService
export default gcpService