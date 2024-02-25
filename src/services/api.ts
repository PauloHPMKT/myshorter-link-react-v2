import axios from "axios";

const baseURL = import.meta.env.VITE_BITLY_URL as string;
const key = import.meta.env.VITE_BITLY_KEY as string;

export const api = axios.create({
    baseURL,
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${key}`,
    },
});
