import axios from 'axios';
import authService from './auth';
const HOST_URL = "http://localhost:3002/api/v0"
const videoThumbnail1 = "https://img.youtube.com/vi/Nnd6PCkXw30/maxresdefault.jpg"
const videoThumbnail2 = 'https://img.youtube.com/vi/e_pYhINF93Q/maxresdefault.jpg'
const icon_url1 = "https://yt3.googleusercontent.com/ytc/APkrFKYL_GdO9ss5jGkRtiuavwTl1PmYIF-UK6YlzISXiA=s176-c-k-c0x00ffffff-no-rj"
const icon_url2 = "https://yt3.ggpht.com/MeY_fGNrjVLV0PVOBN7dRWzMBS0y41YGm55LOaJ02cXV82a7Np9pYxxhHFqdYdncEy1I2cYR=s176-c-k-c0x00ffffff-no-rj-mo"

const UserEmail_Id = "ankitprasad.119@gmail.com"


class APIService {

  // GET Requests
  getChannels = async (user_email_id) => {
    const channels = [
      { id: '1', name: 'Harkirat Singh', iconUrl: icon_url2 },
      { id: '2', name: 'Youtube hub', iconUrl: icon_url1 },
    ];
    return channels;
  }
  getEditorsList = async (channel_id, user_email_id) => {
    return [
      {
        email_id: "user@gmail.com",
        icon_url: icon_url1
      },
      {
        email_id: "ankit@gmail.com",
        icon_url: icon_url2
      },
      {
        email_id: "raju@gmail.com",
        icon_url: icon_url1
      },
    ]
  }
  getVideosForChannel = async (channel_id, user_email_id) => {
    const videos = [
      {
        id: '1', title: 'Complete MERN Stack Course For Beginners (Syllabus Included)', thumbnailUrl: videoThumbnail1, description: 'Buy here - https://harkirat.classx.co.in/new-cou...\n' +
          'Use coupon code "YOUTUBE" valid for 2 days\n' +
          '\n' +
          'In this video, Harkirat Singh talks and takes us on a progress check of what has happened with the open-source course which he launched a few months back.\n' +
          '\n' +
          'Social Links\n' +
          '\n' +
          'https://twitter.com/kirat_tw\n' +
          'https://linkedin.com/in/kirat-li\n' +
          'https://www.instagram.com/kirat_ins/\n' +
          'https://discord.com/invite/WAaXacK9bh',
        uploadStatus: 'Processing'
      },
      {
        id: '2', title: 'These Coding Projects Give You An Unfair Advantage', thumbnailUrl: videoThumbnail2, description: "In this video, we've got some awesome coding project ideas for you that can be the next million dollar businesses.\n" +
          '\n' +
          'Social Links\n' +
          '\n' +
          'https://twitter.com/kirat_tw\n' +
          'https://linkedin.com/in/kirat-li\n' +
          'https://www.instagram.com/kirat_ins/\n' +
          'https://discord.com/invite/WAaXacK9bh',
        uploadStatus: 'Published'
      },
    ];
    return videos;
  }
  getVideoDetails = async (video_id) => {
    return {
      video_id: "",
      title: "Video Title Here",
      description: "This is the video description. It provides more details about the video content, background, and other relevant information.",
      video_s3_url: "https://www.youtube.com/embed/zqGW6x_5N0k"
    }
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


  addEditors = async (channel_id, editor_mail_id) => {
    const requestData = {
      channel_id: channel_id,
      editor_mail_id: editor_mail_id
    }
    const apiUrl = HOST_URL + `/channel/${channel_id}/addEditor`
    axios.post(apiUrl, requestData).then(res => {
      console.log('Response:', res.data);
    }).catch(error => {
      console.error('Error:', error);
    });
  }
  createUploadableUrl = async (video_name) => {
  }
  addVideoMetadata = async (video_id, title, description, video_s3_url, channel_id) => {
    try {

    } catch (error) {

    }
  }
}

const apiService = new APIService();
export default apiService;