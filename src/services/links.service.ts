import { api } from "./api";

export default {
    generateShortenLink: (url: string) => {
        return api.post("/shorten", {
            long_url: url,
        });
    }
}