import axios from "axios";

const baseURL = 'https://glorious-robe-calf.cyclic.app'

export const GlobalInstance = axios.create({
    baseURL: baseURL,
    headers: {
      Accept: "application/json",
    },
  });