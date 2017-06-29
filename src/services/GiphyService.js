import axios from '../../node_modules/axios/dist/axios';

// this function returns a promise
function list(tags, page, limit) {
    return axios.get(`http://api.giphy.com/v1/gifs/search?q=${encodeURI(tags.replace("#", ""))}&api_key=dc6zaTOxFJmzC&limit=${limit}&offset=${page * 25}`)
}

// service to connect to giphy's apis. we can add more apis in the future.
export default function GiphyService() {
    return {
        list: list
    }
}
