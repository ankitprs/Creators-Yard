import axios from 'axios';
import authService from './auth';
import { auth } from '../conf/conf';

const HOST_URL = import.meta.env.VITE_APP_BACKEND_URL


class APIService {

  authToken = null;

  getAuthToken = async () => {
    if (this.authToken != null) {
      return this.authToken
    }
    const userData = await authService.getCurrentUser()
    this.authToken = userData.token;
    return this.authToken
  }

  authenticatedApiCall = async (REQUEST_TYPE, endpoint, requestBody = {}, params = {}) => {
    const token = await this.getAuthToken();
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
  }

  // GET Requests
  // return type formate - {id, name, iconUrl}
  getChannels = async () => {
    const endpoint = `${HOST_URL}/channel/list_channels`
    const response = await this.authenticatedApiCall('GET', endpoint)
    return response.data
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

  createProject = async (channel_id, project_name) => {
    const endpoint = HOST_URL + "/project"
    const response = await this.authenticatedApiCall("POST", endpoint, {
      channel_id,
      project_name
    })
    return response.data
  }

  // CREATE CHANNEL 
  getOauth2Url = async () => {
    const endpoint = HOST_URL + "/channel/oauth2_url"
    const response = await this.authenticatedApiCall('POST', endpoint)
    return response.data.authorizationUrl;
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