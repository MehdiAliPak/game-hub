import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '0e3eb7782c0f450da022f136576949af'
    }
})