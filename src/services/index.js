import axios from "axios";
import { getUser, login, logout, register } from "./auth";
import {
  createMemory,
  updateMemory,
  deleteMemory,
  getAllMemories,
  getMemoryByTitle,
  getMemoriesByUser,
} from "./memories";

const client = axios.create({
  baseURL: "https://x1hy0uvvv7.execute-api.us-west-2.amazonaws.com/dev/bitacora-service",
  withCredentials: true,
});

export const auth = {
  login: login(client),
  logout: logout(client),
  register: register(client),
  getUser: getUser(client),
};

export const memories = {
  createMemory: createMemory(client),
  updateMemory: updateMemory(client),
  deleteMemory: deleteMemory(client),
  getAllMemories: getAllMemories(client),
  getMemoryByTitle: getMemoryByTitle(client),
  getMemoriesByUser: getMemoriesByUser(client),
};
