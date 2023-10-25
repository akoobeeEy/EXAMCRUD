import axios from "axios";


export const request = axios.create({
    baseURL: "https://6538abb2a543859d1bb1b392.mockapi.io/",
    timeout: 10000,
})