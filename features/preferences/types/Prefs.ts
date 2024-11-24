import FooterSection from "./FooterSection";
import LandingPageSection from "./LandingPageSection";
import SocialMediumLink from "./SocialMediumLink";
import TaxPref from "./TaxPref";

interface Prefs {
  description: string;
  email: string;
  "footer-links": FooterSection[];
  keywords: string;
  logo: string;
  phone: string;
  title: string;
  "social-links": SocialMediumLink[];
  "landing-page-sections": LandingPageSection[];
  "tax-prefs": TaxPref[];
  "tax-free": string;
}
export default Prefs;
