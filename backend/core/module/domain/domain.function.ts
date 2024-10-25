import type { Context } from "moleculer";

import * as IDomain from "./domain.interface";
import { WhoIsRepository } from "../../repositories";

export const getDomain = async(ctx: Context<IDomain.GetDomainQueryParams, IDomain.DomainMeta>) => {
    const { data } = await WhoIsRepository.getDomain(ctx?.params?.query.domain, ctx?.params?.query.type);
    return data;
};