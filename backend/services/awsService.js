import axios from 'axios'
import AWS from 'aws-sdk';

const S3_BUCKET_NAME = process.env.S3_BUCKET_NAME


class AwsService {

  getSignedUploadableUrl(key) {

  }

  getStreamableUrl(key) {

  }

  async getVideoMetadata(signedUrl) {
    // 2. Get video metadata from S3 object
    const headObjectResponse = await axios.head(signedUrl);
    const videoData = headObjectResponse.headers;
    return videoData;
  }

  async generateSignedUrl(S3_VIDEO_KEY) {
    // 1. Generate pre-signed URL for the video object in S3
    const s3Client = new AWS.S3({ region: 'us-east-1' });
    const params = { Bucket: S3_BUCKET_NAME, Key: S3_VIDEO_KEY };
    const signedUrl = await s3Client.getSignedUrlPromise('getObject', params);
    return signedUrl;
  }

}

const awsService = new AwsService
export default awsService