import FooterSection from "./FooterSection";
import LandingPageSection from "./LandingPageSection";
import SocialMediumLink from "./SocialMediumLink";

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
}
export default Prefs;
