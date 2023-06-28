import axios from "axios";
//base Url
const instance = axios.create({
    baseURL: "https://timetable-4qip.onrender.com/api",
    // baseURL: "http://localhost:5000/api",
});

export default instance;