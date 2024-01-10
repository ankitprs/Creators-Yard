import axios from 'axios';
import authService from './auth';
import { auth } from '../conf/conf';
const HOST_URL = "http://localhost:3002/api/v0"

const UserEmail_Id = "ankitprasad.119@gmail.com"


class APIService {

  authoriztedCall = async (REQUEST_TYPE, endpoint, requestBody, params) => {
    try {
      const token = await auth.currentUser.getIdToken
      const url = process.env.REACT + endpoint
      if (REQUEST_TYPE == 'POST') {
        const res = await axios.post(url, requestBody, {
          headers: { authorization: `Bearer ${token}` },
          params: params
        })

        return res;
      } else {
        const res = await axios.get(url, {
          headers: { authorization: `Bearer ${token}` },
          params: params
        }
        )

        return res;
      }
    } catch (error) {
      console.log(error);
      return null
    }


  }

  // GET Requests
  // return type formate - {id, name, iconUrl}
  getChannels = async (user_email_id) => {
    const endpoint = `${HOST_URL}/channel/list_channels`
    const params_parameter = {
      params: {
        email_id: user_email_id
      }
    }
    try {
      const response = await axios.get(endpoint, params_parameter)
      return response.data
    } catch (err) {
      console.log(err);
      return [];
    }
  }

  getEditorsList = async (channel_id, user_email_id) => {
    const endpoint = `${HOST_URL}/channel/list_editors`
    const params_parameter = {
      params: {
        email_id: user_email_id,
        channel_id: channel_id
      }
    }
    try {
      const response = await axios.get(endpoint, params_parameter)
      console.log(response.data);
      return response.data
    } catch (err) {
      console.log(err);
      return [];
    }
  }

  getVideosForChannel = async (channel_id, user_email_id) => {

    const endpoint = `${HOST_URL}/video/channel_id/${channel_id}`
    const params_parameter = {
      params: {
        email_id: user_email_id,
        channel_id: channel_id
      }
    }
    try {
      const response = await axios.get(endpoint, params_parameter)
      console.log(`video: -> ${response.data}`);
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
      const response = await axios.get(endpoint, params_parameter)
      console.log(`video: -> ${response.data}`);
      return response.data
    } catch (err) {
      console.log(err);
      return [];
    }
  }

  getStreamableUrl = () => {

  }

  // CREATE CHANNEL 
  getOauth2Url = async () => {
    try {
      const response = await axios.post(HOST_URL + "/channel/oauth2_url")
      return response.data.authorizationUrl;
    } catch (err) {
      console.error(err);
      return err;
    }
  }

  createChannel = async (authorization_code) => {
    const requestData = {
      authorization_code: authorization_code,
      email_id: UserEmail_Id,
    }
    axios.post(HOST_URL + '/channel/create', requestData)
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
    axios.post(apiUrl, requestData).then(res => {
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
    axios.post(apiUrl, requestData).then(res => {
      console.log('Response:', res.data);
    }).catch(error => {
      console.error('Error:', error);
    });
  }

  createUploadVideo = async (channel_id, video_id, title, description, email_id) => {
    const requestBody = { channel_id: channel_id, video_id: video_id, title: title, description: description, email_id: email_id };
    const apiUrl = HOST_URL + `/video/upload`

    axios.post(apiUrl, requestBody)
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
  publishVideoToYT = async (video_id, user_email_id) => {
    const requestBody = { video_id: video_id, email_id: user_email_id };

    const apiUrl = HOST_URL + `/channel/publish`
    axios.post(apiUrl, requestBody).then(response => {
      console.log('Response:', response.data);
    }).catch(error => {
      console.error('Error:', error);
    });

  }
}

const apiService = new APIService();
export default apiService;