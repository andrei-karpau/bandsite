const apiKey = '5a014cf2-1a30-4d92-a6b6-965fd14ea672';
const url = 'https://project-1-api.herokuapp.com';

class BandSiteApi {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.url = url;
        this.loadComments = (commentsArrayFromAPI, commentsComposerFunction) => {
            const commentsPosted = document.querySelector('.comments__posted');
            commentsPosted.replaceChildren();
            for (let i = 0; i < commentsArrayFromAPI.length; i ++) {
                let comment = commentsArrayFromAPI[i];
                commentsComposerFunction(commentsPosted, comment);
            }
        }
    }

    getComments(commentsComposerFunction) {
        const request = async () => {
            try {
                const commentsDataFromAPI = await axios.get(`${this.url}/comments?api_key=${this.apiKey}`);
                const commentsArray = commentsDataFromAPI.data
                commentsArray.sort((a, b) => b.timestamp - a.timestamp);
                this.loadComments(commentsArray, commentsComposerFunction);
            } catch (error) {
                console.error("Error:", error);
            }
        } 
        return request();
    }

    postComment(comment, commentsComposerFunction) {
        const request = async () => {
            try {
                await axios.post(`${this.url}/comments?api_key=${this.apiKey}`, comment);
                const reloadComments = await axios.get(`${this.url}/comments?api_key=${this.apiKey}`);
                reloadComments.data.sort((a, b) => b.timestamp - a.timestamp);
                this.loadComments(reloadComments.data, commentsComposerFunction);
            } catch (error) {
                console.error("Error:", error);
            }
        }
        return request();
    }

    deleteComment(id, commentsComposerFunction) {
        const request = async () => {
            try {
                await axios.delete(`${this.url}/comments/${id}?api_key=${this.apiKey}`);
                const reloadComments = await axios.get(`${this.url}/comments?api_key=${this.apiKey}`);
                reloadComments.data.sort((a, b) => b.timestamp - a.timestamp);
                this.loadComments(reloadComments.data, commentsComposerFunction);
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

    getShows(showsComposerFunction) {
        const request = async () => {
            try {
                const response = await axios.get(`${this.url}/showdates?api_key=${this.apiKey}`)
                return showsComposerFunction(response.data);
            } catch (error) {
                console.error("Error:", error);
            }
        }
        return request();
    }
}