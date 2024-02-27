import { ShortenLinkProps } from "../types/interfaces";
import { api, supabase } from "./api";

export default {
    generateShortenLink: (url: string) => {
        return api.post("/shorten", {
            long_url: url,
        });
    },

    toCreateOnSupabase: async (content: ShortenLinkProps) => {
        const { data, error, status } = await supabase().from("shorten-link").insert(content);
        return {
            data,
            error,
            status
        };
    },

    getAllLinksSaved: async () => {
        const { data, error } = await supabase().from("shorten-link").select("*");
        return { data, error };
    },

    removeShortenLink: async (id: string) => {
        const { error } = await supabase().from('shorten-link').delete().eq('id', id);
        return error;
    }
}