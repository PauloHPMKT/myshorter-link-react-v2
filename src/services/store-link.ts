import { v4 as uuidv4 } from "uuid";
import Cookies from "js-cookie";
import { ShortenLinkProps } from "../types/interfaces";
import linksService from "./links.service";

let storedSessionId = Cookies.get("sessionId");
if (!storedSessionId) {
    storedSessionId = uuidv4();
    Cookies.set("sessionId", storedSessionId);
}

export const saveShortenLink = async (content: ShortenLinkProps) => {
    type ShortenLinkPropsToCreate = Omit<ShortenLinkProps, 'created_at | custom_bitlinks | deeplinks | tags'>;

    const shortenLinkContent: ShortenLinkPropsToCreate = {
        archived: true,
        id: content.id,
        link: content.link,
        long_url: content.long_url,
        references: content.references,
    }

    const requestData = {
        ...shortenLinkContent,
        sessionId: storedSessionId,
    }

    await linksService.toCreateOnSupabase(requestData);
}

export const getShortenLinks = async () => {
    const { data } = await linksService.getAllLinksSaved(storedSessionId);
    return data;
}

export const removeShortenLink = async (id: string) => {
    const error = await linksService.removeShortenLink(id);
    return error;
}
