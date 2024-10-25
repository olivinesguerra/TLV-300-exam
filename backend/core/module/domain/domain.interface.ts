import { Meta, Params } from "../shared/request.interface";

export interface DomainMeta extends Meta {}
export interface GetDomainQueryParams extends Omit<Params, "body" | "query" | "params"> {
    query: { 
        domain: string,
        type: string,
    }
};