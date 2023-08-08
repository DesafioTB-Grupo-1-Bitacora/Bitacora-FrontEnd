import axios from "axios";
import { getUser, login, logout, register } from "./auth";

const client = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true
})

export const auth = {
    login: login(client),
    logout: logout(client),
    register: register(client),
    getUser: getUser(client)
}