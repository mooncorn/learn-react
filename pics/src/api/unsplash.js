import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID yKt8WDTuSalbc8vA3e1m8_WOY0-fO14iUaomKqd2rJ8",
    },
});
