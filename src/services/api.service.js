import axios from 'axios'

export default class ApiService {
    constructor() {
        this.url = 'https://desolate-castle-37165.herokuapp.com/'
        this.request = {
            method: 'post',
            url: this.url,
        };
        this.apiEndpoints = {
            JOBS: {
                GET_JOBS: 'api/jobs?location={0}&search={1}'
            }
        }
    }
    get(endpoint, params = {}) {
        let that = this;
        let url = this.url + endpoint;
        try {
            that.request.url = feedRequestUrl(url, params);
            return axios(that.request).then((response) => {
                return response.data;
            });
        } catch (error) {
            console.log(error)
        }
    };
};

function feedRequestUrl(url, params) {
    let paramsRequired = url.match(/{\d}/)
    if (paramsRequired) {
        if (paramsRequired.length != Object.keys(params).length) {
            throw new Error('api.service - Missing request params');
        }
        paramsRequired.forEach((value, index) => {
            url = url.replace(value, params[index])
        });
    }
    return url;
}