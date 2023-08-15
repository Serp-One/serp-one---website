import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const COUNTRIES: Record<string, any> = {
  US: { hl: "en", gl: "us", cr: "countryUS", tld: "com" },
  UK: { hl: "en", gl: "uk", cr: "countryGB", tld: "com" },
  IN: { hl: "en", gl: "in", cr: "countryIN", tld: "com" },
};

export const createGoogleSearchUrl = ({ query, country }: any) => {
  const protocol = "https";
  const subdomain = "www";
  const domain = "google";
  const countryDetails = COUNTRIES[country];
  const tld = countryDetails.tld;
  delete countryDetails.tld;
  delete countryDetails.hl;
  const route = "search";

  const queryParams = new URLSearchParams({
    q: query,
    client: "desktop-gws-wiz-on-focus-serp",
    gws_rl: "ssl",
    sourceid: "chrome",
    ie: "UTF-8",
    oq: query,
    ...{ ...COUNTRIES[country] },
  }).toString();

  const googleSearchUrl = `${protocol}://${subdomain}.${domain}.${tld}/${route}?${queryParams}`;
  return googleSearchUrl;
};

// https://www.google.com/search?q=zendesk+alternatives&rlz=1C5GCEM_enIN1040IN1040&oq=zendesk+alternatives&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRg8MgYIAhBFGDwyBggDEEUYPNIBBzc1OWowajGoAgCwAgA&sourceid=chrome&ie=UTF-8

// https://www.google.com/search?q=zendesk+alternatives&sca_esv=557079022&source=hp&ei=vl_bZOrpBrKA2roP2uSjiAQ&iflsig=AD69kcEAAAAAZNttzoCa_R8wRvr1LyZz9zw_kJjciZ64&ved=0ahUKEwjqwKqNxt6AAxUygFYBHVryCEEQ4dUDCAs&uact=5&oq=zendesk+alternatives&gs_lp=Egdnd3Mtd2l6IhR6ZW5kZXNrIGFsdGVybmF0aXZlczIFEAAYgAQyBRAAGIAEMgUQABiABDIGEAAYFhgeMgYQABgWGB4yCBAAGIoFGIYDSOAjUMoEWJIicAF4AJABAJgBowKgAfMaqgEGMC4xOC4yuAEDyAEA-AEBqAIKwgIKEAAYAxiPARjqAsICChAuGAMYjwEY6gLCAhEQLhiABBixAxiDARjHARjRA8ICCxAAGIAEGLEDGIMBwgIEEAAYA8ICCBAAGIAEGLEDwgILEC4YgAQYsQMYgwHCAgsQLhiKBRixAxiDAcICCBAuGIAEGLEDwgIFEC4YgATCAgoQLhiABBixAxgKwgIKEAAYgAQYsQMYCsICBxAAGIAEGAo&sclient=gws-wiz