const apiKey = '5a014cf2-1a30-4d92-a6b6-965fd14ea672';
const url = 'https://project-1-api.herokuapp.com';

class BandSiteApi {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.url = url;
    }

    postComment(data, successCallback) {
        const request = async () => {
            try {
                await axios.post(`${this.url}/comments?api_key=${this.apiKey}`, data);
                successCallback();
            } catch (error) {
                console.error("Error:", error);
            }
        }
        return request();
    }
    
    getComments() {
        const request = async () => {
            try {
                const response = await axios.get(`${this.url}/comments?api_key=${this.apiKey}`);
                response.data.sort((a, b) => b.timestamp - a.timestamp);
                return response.data;
            } catch (error) {
                console.error("Error:", error);
            }
        } 
        return request();
    }

    deleteComment(id, successCallback) {
        const request = async () => {
            try {
                await axios.delete(`${this.url}/comments/${id}?api_key=${this.apiKey}`);
                successCallback();
            } catch (error) {
                console.error("Error:", error);
            }
        }
        return request();
    }

    likeComment(id) {
        const request = async () => {
            try {
                await axios.put(`${this.url}/comments/${id}/like?api_key=${this.apiKey}`);
            } catch (error) {
                console.error("Error:", error);
            }
        }
        return request();
    }

    getShows() {
        const request = async () => {
            try {
                const response = await axios.get(`${this.url}/showdates?api_key=${this.apiKey}`)
                return response.data;
            } catch (error) {
                console.error("Error:", error);
            }
        }
        return request();
    }
}