const apiKey = '5a014cf2-1a30-4d92-a6b6-965fd14ea672';
const url = 'https://project-1-api.herokuapp.com';

class BandSiteApi {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.url = url;
    }

    postComment(comment, successCallback) {
        const request = async () => {
            try {
                await axios.post(`${this.url}/comments?api_key=${this.apiKey}`, comment);
                const reloadComments = await axios.get(`${this.url}/comments?api_key=${this.apiKey}`);
                reloadComments.data.sort((a, b) => b.timestamp - a.timestamp);
                successCallback(reloadComments.data);
            } catch (error) {
                console.error("Error:", error);
            }
        }
        return request();
    }
    
    getComments(successCallback) {
        const request = async () => {
            try {
                const comments = await axios.get(`${this.url}/comments?api_key=${this.apiKey}`);
                comments.data.sort((a, b) => b.timestamp - a.timestamp);
                return successCallback(comments.data);
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
                const reloadComments = await axios.get(`${this.url}/comments?api_key=${this.apiKey}`);
                reloadComments.data.sort((a, b) => b.timestamp - a.timestamp);
                successCallback(reloadComments.data);
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

    getShows(successCallback) {
        const request = async () => {
            try {
                const response = await axios.get(`${this.url}/showdates?api_key=${this.apiKey}`)
                return successCallback(response.data);
            } catch (error) {
                console.error("Error:", error);
            }
        }
        return request();
    }
}