import axios from "axios";

const instance = axios.create({
    baseURL: 'https://us-central1-challenge-10fc8.cloudfunctions.net/api'
});

export default instance;

// https://us-central1-challenge-10fc8.cloudfunctions.net/api 
// http://localhost:5001/challenge-10fc8/us-central1/api