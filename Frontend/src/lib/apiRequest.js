import axios from "axios"
const url="https://main--realestatebackend.netlify.app/api" || "http://localhost:8800/api"

const apiRequest= axios.create({
    baseURL:url,
    withCredentials:true
})

export default apiRequest