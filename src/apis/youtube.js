import axios from 'axios';

const KEY = 'AIzaSyAWa2omkWfa2ny2fchy_WOVCtxpGPRZ9j8';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});