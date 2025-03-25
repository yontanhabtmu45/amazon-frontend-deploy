import axios from "axios";

const axiosInstance = axios .create({
    // Local instance
    // baseURL:"http://127.0.0.1:5001/clone-7600a/us-central1/api"
    // Live instance deploy
    baseURL: "https://amazon-api-deploy-01au.onrender.com"
})

export {axiosInstance}