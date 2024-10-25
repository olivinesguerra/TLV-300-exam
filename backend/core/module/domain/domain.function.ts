import type { Context } from "moleculer";
import moment from "moment";

import * as IDomain from "./domain.interface";
import { WhoIsRepository } from "../../repositories";

export const getDomain = async(ctx: Context<IDomain.GetDomainQueryParams, IDomain.DomainMeta>) => {
    const { domain, type, requested_data } = ctx?.params?.query;
    const { data } = await WhoIsRepository.getDomain(domain, type);

    if (requested_data === "domain_information") {
        let temp: any = {};
        temp.domain_name = data?.WhoisRecord?.domainName;
        temp.registrar = data?.WhoisRecord?.registrarName;
        temp.registration_date = data?.WhoisRecord?.registryData?.createdDate;
        temp.expiration_date = data?.WhoisRecord?.registryData?.expiresDate;
        temp.domain_age = data?.WhoisRecord?.estimatedDomainAge;
        temp.host_names = data?.WhoisRecord?.nameServers?.hostNames;
        return temp;
    } else if (requested_data === "contact_information") {
        let temp: any = {};
        temp.registrant_name = data?.WhoisRecord?.registrant?.organization;
        temp.technical_contact_name = data?.WhoisRecord?.technicalContact?.organization;
        temp.administrative_contact_name = data?.WhoisRecord?.administrativeContact?.organization;
        temp.contact_email = data?.WhoisRecord?.contactEmail;
        return temp;
    }
    
    return data;
};