import axios from "axios";
const axiosInstance = axios.create({
  //local instance of firebase function note i didnt use firebase function to deploy du to payment issue inseade i used the below on render.com
  // baseUrl: "http://127.0.0.1:5001/clone-559ec/us-central1/api",

  // amazon -clone project deployed on render.com
  baseURL: "https://amazon-api-backend-deployment.onrender.com",
});
export { axiosInstance };
