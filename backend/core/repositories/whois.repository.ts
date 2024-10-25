import axios from "axios";

export const getDomain = async(domain: string, type: string) => {
    return await axios.get(
        `https://www.whoisxmlapi.com/whoisserver/WhoisService?apiKey=${process.env.WHOIS_API_KEY}&domainName=${domain}&outputFormat=${type}`
    );
};