import { ShortenLinkProps } from "../types/interfaces";
import linksService from "./links.service";

export const saveShortenLink = async (content: ShortenLinkProps) => {
    type ShortenLinkPropsToCreate = Omit<ShortenLinkProps, 'created_at | custom_bitlinks | deeplinks | tags'>;
    const shortenLinkContent: ShortenLinkPropsToCreate = {
        archived: true,
        id: content.id,
        link: content.link,
        long_url: content.long_url,
        references: content.references,
    }
    await linksService.toCreateOnSupabase(shortenLinkContent);
}

export const getShortenLinks = async () => {
    const { data } = await linksService.getAllLinksSaved();
    return data;
}
