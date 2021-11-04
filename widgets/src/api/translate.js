import axios from "axios";
import config from "../config.js";

export default axios.create({
  baseURL: "https://translation.googleapis.com/language/translate/v2",
  params: {
    key: config.googleTranslateApiKey,
  },
});
