import axios from "axios";
import type { Context } from "moleculer";

import * as IDomain from "./domain.interface";
import { WhoIsRepository } from "../../repositories";

export const getDomain = async(ctx: Context<IDomain.GetDomainQueryParams, IDomain.DomainMeta>) => {

    if (ctx?.params?.query.domain) {
        return await WhoIsRepository.getDomain(ctx?.params?.query.domain);
    }
    
    return null;
};