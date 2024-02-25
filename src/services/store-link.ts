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
    console.log(shortenLinkContent)
    await linksService.toCreateOnSupabase(shortenLinkContent);
}
