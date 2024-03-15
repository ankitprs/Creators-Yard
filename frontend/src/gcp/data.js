import axios from 'axios';
import authService from './auth';
import { auth } from '../conf/conf';

const HOST_URL = process.env.REACT_APP_BACKEND_URL


class APIService {

  authToken = "";

  authenticatedApiCall = async (REQUEST_TYPE, endpoint, requestBody = {}, params = {}) => {
    try {
      const token = this.authToken;
      console.log(`TOKEN -> ${token}`)
      //await auth.currentUser.getIdToken()
      if (REQUEST_TYPE == 'POST') {
        return await axios.post(endpoint, requestBody, {
          headers: { authorization: `Bearer ${token}` },
          params: params
        })
      } else {
        return await axios.get(endpoint, {
          headers: { authorization: `Bearer ${token}` },
          params: params
        }
        )
      }
    } catch (error) {
      console.log(error);
      return null
    }
  }

  // GET Requests
  // return type formate - {id, name, iconUrl}
  getChannels = async () => {
    const endpoint = `${HOST_URL}/channel/list_channels`
    try {
      const response = await this.authenticatedApiCall('GET', endpoint)
      return response.data
    } catch (err) {
      console.log(err);
      return [];
    }
  }

  getEditorsList = async (channel_id) => {
    if (!channel_id) return [];
    const endpoint = `${HOST_URL}/channel/list_editors`
    const params_parameter = {
      channel_id: channel_id
    }

    try {
      const response = await this.authenticatedApiCall('GET', endpoint, {}, params_parameter)
      console.log(response);
      return response.data
    } catch (err) {
      console.log(err);
      return [];
    }
  }

  getVideosForChannel = async (channel_id) => {
    if (!channel_id) return [];
    const endpoint = `${HOST_URL}/video/channel_id/${channel_id}`
    const params_parameter = {
      channel_id: channel_id
    }
    try {
      const response = await this.authenticatedApiCall('GET', endpoint, {}, params_parameter)
      return response.data
    } catch (err) {
      console.log(err);
      return [];
    }
  }

  getVideoDetails = async (video_id) => {
    const endpoint = `${HOST_URL}/video/video_id/${video_id}`
    const params_parameter = {
      params: {
        video_id: video_id
      }
    }
    try {
      const response = await this.authenticatedApiCall('GET', endpoint, {}, params_parameter)
      return response.data
    } catch (err) {
      console.log(err);
      return [];
    }
  }

  putAuthToken = (token) => {
    this.authToken = token;
  }

  // CREATE CHANNEL 
  getOauth2Url = async () => {
    try {
      const endpoint = HOST_URL + "/channel/oauth2_url"
      const response = await this.authenticatedApiCall('POST', endpoint)
      return response.data.authorizationUrl;
    } catch (err) {
      console.error(err);
      return err;
    }
  }

  createChannel = async (authorization_code) => {
    const requestData = {
      authorization_code: authorization_code
    }
    const apiUrl = HOST_URL + '/channel/create'
    this.authenticatedApiCall('POST', apiUrl, requestData)
      .then(response => {
        console.log('Response:', response.data);
      }).catch(error => {
        console.error('Error:', error);
      });
  }


  addEditors = async (channel_id, editor_email_id) => {
    const requestData = {
      channel_id: channel_id,
      editor_email_id: editor_email_id
    }
    const apiUrl = HOST_URL + `/channel/add_editors`
    this.authenticatedApiCall('POST', apiUrl, requestData)
      .then(res => {
        console.log('Response:', res.data);
      }).catch(error => {
        console.error('Error:', error);
      });
  }

  removeEditors = async (channel_id, editor_email_id) => {
    const requestData = {
      channel_id: channel_id,
      editor_email_id: editor_email_id
    }
    const apiUrl = HOST_URL + `/channel/remove_editors`
    this.authenticatedApiCall('POST', apiUrl, requestData)
      .then(res => {
        console.log('Response:', res.data);
      }).catch(error => {
        console.error('Error:', error);
      });
  }

  createUploadVideo = async (channel_id, video_id, title, description, email_id) => {
    const requestData = { channel_id: channel_id, video_id: video_id, title: title, description: description, email_id: email_id };
    const apiUrl = HOST_URL + `/video/upload`

    this.authenticatedApiCall('POST', apiUrl, requestData)
      .then(response => {
        console.log('Response:', response.data);
      }).catch(error => {
        console.error('Error:', error);
      });
  }

  addVideoMetadata = async (video_id, title, description, video_s3_url, channel_id) => {
    try {

    } catch (error) {

    }
  }

  // === PUBLISH VIDEO  === 
  publishVideoToYT = async (video_id, channel_id) => {
    const requestData = { video_id: video_id, channel_id: channel_id };

    const apiUrl = HOST_URL + `/channel/publish`
    this.authenticatedApiCall('POST', apiUrl, requestData)
      .then(response => {
        console.log('Response:', response.data);
      }).catch(error => {
        console.error('Error:', error);
      });
  }
}

const apiService = new APIService();
export default apiService;