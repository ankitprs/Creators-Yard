import axios from 'axios'
import { google } from 'googleapis';
import got from 'got';

const CLIENT_ID = process.env.GOOGLE_CLIENT_ID
const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET
const REDIRECT_URL = process.env.GOOGLE_REDIRECT_URL
const CHANNEL_DETAIL_URL = "https://www.googleapis.com/youtube/v3/channels?part=snippet&mine=true&access_token="


const youtube = google.youtube({ version: 'v3' });


class YoutubeApiService {
  oauth2Client = null
  scopes = null

  constructor() {
    this.oauth2Client = new google.auth.OAuth2(
      CLIENT_ID,
      CLIENT_SECRET,
      REDIRECT_URL
    )
    this.scopes = [
      "https://www.googleapis.com/auth/youtube.readonly",
      'https://www.googleapis.com/auth/youtube.upload'
    ]
  }


  // <============  CREATE CHANNEL ============>
  getOauth2Url = async () => {
    const authorizationUrl = this.oauth2Client.generateAuthUrl({
      access_type: 'offline',
      scope: this.scopes,
      include_grated_scopes: true
    })
    return { authorizationUrl: authorizationUrl };
  }

  exchangeTokenRequest = async (authorization_code) => {
    return await this.oauth2Client.getToken(authorization_code)
  }

  getChannelDetails = async (access_token) => {
    const data = await axios.get(CHANNEL_DETAIL_URL + access_token)
    const id = data.data.items[0].id
    const snippet = data.data.items[0].snippet
    const title = snippet.title
    const thumbnail = snippet.thumbnails.default.url
    return { channel_id: id, channel_name: title, channel_icon_url: thumbnail };
  }




  // <============  Publish to CHANNEL ============>
  refreshToken = async (refresh_token) => {
    this.oauth2Client.setCredentials({ refresh_token })
    try {
      const response = await this.oauth2Client.refreshToken()
      const { access_token, expires_in } = response.credentials;
      console.log("Access token refreshed:", access_token);
      console.log("Expires in:", expires_in, "seconds");
      return access_token;
    } catch (error) {
      console.error("Error refreshing access token:", error.message);
    }
    return null;
  }

  publishVideo = async (title, description, refresh_token, signedUrl) => {
    try {
      const access_token = await refreshToken(refresh_token);

      const stream = got.stream(signedUrl);

      const headers = {
        'Authorization': `Bearer ${access_token}`,
      };

      console.log("uploading... ")

      const uploadResponse = await youtube.videos.insert({
        headers,
        resource: {
          snippet: {
            title: title,
            description: description
          },
          status: {
            privacyStatus: "unlisted"
          }
        },
        part: "snippet, status",
        media: {
          mediaType: "video/mp4",
          body: stream,
        }
      });

      console.log('Video uploaded:', uploadResponse.data);
      return ('Video uploaded successfully!');
    } catch (error) {
      console.error('Error uploading video:', error);
      return ('Error uploading video');
    }
  }
}

const youtubeApiService = new YoutubeApiService
export default youtubeApiService