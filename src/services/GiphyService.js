import axios from '../../node_modules/axios/dist/axios';


function list(tags, page, limit) {
    return axios.get(`http://api.giphy.com/v1/gifs/search?q=${encodeURI(tags.replace("#", ""))}&api_key=dc6zaTOxFJmzC&limit=${limit}&offset=${page * 25}`)
}

export default function GiphyService() {
    return {
        list: list
    }
}
