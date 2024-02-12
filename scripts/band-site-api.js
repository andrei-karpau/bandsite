const apiKey = '5a014cf2-1a30-4d92-a6b6-965fd14ea672';
const url = 'https://project-1-api.herokuapp.com';

class BandSiteApi {
    constructor(apiKey) {
        this.apiKey = apiKey;
    }

    postComment(data, successCallback) {
        axios
            .post(`${url}/comments?api_key=${this.apiKey}`, data)
            .then((response) => {
                console.log("Success:", response);
                if (response.status === 200) {                    
                    successCallback();
                }
            })
        .catch((error) => console.error("Error:", error));
    }
    
    
    getComments() {
        const request = async () => {
            const response = await axios.get(`${url}/comments?api_key=${this.apiKey}`);
            response.data.sort((a, b) => b.timestamp - a.timestamp);
            return response.data;
        } 
        return request();
    }

    deleteComment(id, successCallback) {
        axios
            .delete(`${url}/comments/${id}?api_key=${this.apiKey}`)
            .then((response) => {
                console.log("Success:", response);
                if (response.status === 200) {
                    successCallback();
                }
            })
        .catch((error) => console.error("Error:", error));
    }

    likeComment(id) {
        const request = async () => {
            const response = await axios.put(`${url}/comments/${id}/like?api_key=${this.apiKey}`);
        }
        return request();
    }
}

let commentsJSON = new BandSiteApi(apiKey);

let postComment = new BandSiteApi(apiKey);

let deleteComment = new BandSiteApi(apiKey);