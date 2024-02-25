import { createClient } from "@supabase/supabase-js";
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

export const supabase = () => {
    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
    const supabaseKey = import.meta.env.VITE_SUPABASE_KEY
    const supabaseClient = createClient(supabaseUrl, supabaseKey)

    return supabaseClient;
}
