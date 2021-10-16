import axios from "axios";
import config from "../config";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        key: config.API_KEY,
    },
});
