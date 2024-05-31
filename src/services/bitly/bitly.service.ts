import { CreateShortenLinkProps, ShortenLinkProps } from "../../types/interfaces";
import { apiService } from "../api";
//import { saveShortenLink } from "../store-link";

export default {
  generateShortenLink: (url: CreateShortenLinkProps) => {
    return apiService.post("/bitly", {
      long_url: url,
    });
  },

  saveShortenLink: async (content: ShortenLinkProps) => {
    type ShortenLinkPropsToCreate = Omit<
      ShortenLinkProps, 
      'created_at | custom_bitlinks | deeplinks | tags'
    >;
    const shortenLinkContent: ShortenLinkPropsToCreate = {
      archived: true,
      id: content.id,
      link: content.link,
      long_url: content.long_url,
      references: content.references,
    }
    return apiService.post('/bitly/save', shortenLinkContent);
  },

  removeCachedLink: (id: string) => {
    const idToRemove = id.replace('/', '-');
    console.log(idToRemove);
    return apiService.delete(`/bitly/clean/${idToRemove}`);
  }
}