const apiKey = '5a014cf2-1a30-4d92-a6b6-965fd14ea672';
const url = 'https://project-1-api.herokuapp.com';

class BandSiteApi {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.url = url;
    }

    postComment(data, successCallback) {
        const request = async () => {
            const response = await axios.post(`${this.url}/comments?api_key=${this.apiKey}`, data);
            if (response.status === 200) {
                successCallback();
            }
        }
        return request();
        // axios
        //     .post(`${this.url}/comments?api_key=${this.apiKey}`, data)
        //     .then((response) => {
        //         if (response.status === 200) {                    
        //             successCallback();
        //         }
        //     })
        // .catch((error) => console.error("Error:", error));
    }
    
    
    getComments() {
        const request = async () => {
            const response = await axios.get(`${this.url}/comments?api_key=${this.apiKey}`);
            response.data.sort((a, b) => b.timestamp - a.timestamp);
            return response.data;
        } 
        return request();
    }

    deleteComment(id, successCallback) {
        const request = async () => {
            const response = await axios.delete(`${this.url}/comments/${id}?api_key=${this.apiKey}`);
            if (response.status === 200) {
                successCallback();
            }
        }
        return request();
        // axios
        //     .delete(`${this.url}/comments/${id}?api_key=${this.apiKey}`)
        //     .then((response) => {
                // if (response.status === 200) {
                //     successCallback();
                // }
        //     })
        // .catch((error) => console.error("Error:", error));
    }

    likeComment(id) {
        const request = async () => {
            const response = await axios.put(`${this.url}/comments/${id}/like?api_key=${this.apiKey}`);
        }
        return request();
    }

    getShows() {
        const request = async () => {
            const response = await axios.get(`${this.url}/showdates?api_key=${this.apiKey}`)
            return response.data;
        }
        return request();
    }
}