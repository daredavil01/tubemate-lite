import axios from "axios";
export const KEY = "AIzaSyCqfk5IAmPibIT1HzuyBHPIH7_0JYCqSiE";
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: "5",
    key: KEY,
    type: "video",
  },
});
