import axios from "axios";
import config from "../config";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        type: "video",
        maxResults: 5,
        key: config.API_KEY,
    },
});
