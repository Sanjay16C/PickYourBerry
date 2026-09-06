import axios from "axios";

const api = axios.create({
    baseURL : process.env.REACT_APP_SERVER_URL,
    withCredentials : true
});

api.interceptors.request.use((req)=>{
    const token = localStorage.getItem("accessToken");
    if(token) req.headers.Authorization = `Bearer ${token}`;
    return req;
});

export default api;