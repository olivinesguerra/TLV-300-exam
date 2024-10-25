import axios from "axios";

export const getDomain = async(domain: string, type: 'application/json' | 'application/xml') => {
    return await axios.get(
        `https://www.whoisxmlapi.com/whoisserver/WhoisService`,
        {
            headers: {
                "Content-Type": type,
            },
            data: {
                "domainName": domain,
                "apiKey": process.env.WHOIS_API_KEY
            }
        }
    );
};