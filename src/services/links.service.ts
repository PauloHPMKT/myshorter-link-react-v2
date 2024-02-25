import { api, supabase } from "./api";

export default {
    generateShortenLink: (url: string) => {
        return api.post("/shorten", {
            long_url: url,
        });
    },

    toCreateOnSupabase: async (dataLink: any) => {
        console.log(dataLink);
        const { data, error, status } = await supabase().from("shorten-link").insert(dataLink);
        return {
            data,
            error,
            status
        };
    }
}