export interface ShortenLinkProps {
    archived: boolean;
    created_at?: Date;
    custom_bitlinks?: any[];
    deeplinks?: any[];
    id: string;
    link: string;
    long_url: string;
    references: ShortenLink.GroupTypes;
    tags?: any[];
}

export namespace ShortenLink {
    export interface GroupTypes {
        group: string;
    }
}