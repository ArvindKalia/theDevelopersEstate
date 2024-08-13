import axios from "axios"
const url= "http://localhost:8800/api"

const apiRequest= axios.create({
    baseURL:url,
    withCredentials:true
})

export default apiRequest