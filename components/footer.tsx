/* eslint-disable @next/next/no-img-element */
import getPrefs from "@/features/preferences/functions/get-prefs";
import SocialMedium from "@/features/preferences/types/SocialMedium";
import { cn } from "@/lib/utils";
import Link from "next/link";
import CollapsibleText from "./collapsible-text";
import Container from "./container";

const socialMediaIcon: Record<SocialMedium, string> = {
  discord: "teenyicons--discord-solid",
  facebook: "teenyicons--facebook-solid",
  instagram: "teenyicons--instagram-solid",
  twitter: "teenyicons--twitter-solid",
  linkedin: "teenyicons--linkedin-solid",
  youtube: "teenyicons--youtube-solid",
  pinterest: "teenyicons--pinterest-solid",
  tiktok: "teenyicons--tiktok-solid",
  snapchat: "teenyicons--snapchat-solid",
  whatsapp: "teenyicons--whatsapp-solid",
  reddit: "teenyicons--reddit-solid",
  telegram: "teenyicons--telegram-solid",
};

async function Footer() {
  const preferences = await getPrefs();

  return (
    <footer>
      <div className="bg-rose-50">
        <Container className="py-16 px-8 flex flex-col gap-8 md:flex-row items-start justify-between">
          <div className="md:max-w-96">
            <Link href="/">
              <img
                src={preferences.logo}
                alt={preferences.title}
                className="w-full max-w-52 object-contain object-left -translate-x-0.5"
              />
            </Link>
            <CollapsibleText>{preferences.description}</CollapsibleText>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-16">
            {preferences["footer-links"].map((section) => (
              <div key={section.index}>
                <h3 className="mb-4 uppercase font-bold text-lg">
                  {section.label}
                </h3>
                <ul className="flex flex-col text-neutral-600 gap-2">
                  {section.links.map(([label, link]) => (
                    <li key={label}>
                      <Link href={link}>{label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <h3 className="mb-4 uppercase font-bold text-lg">
                Contactez-nous
              </h3>
              <ul className="flex flex-col text-neutral-600 gap-2">
                <li>
                  <Link href="#">
                    Téléphone:{" "}
                    <span className="text-rose-400 font-semibold">
                      {preferences.phone}
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    Email:{" "}
                    <span className="text-rose-400 font-semibold">
                      {preferences.email}
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>
      <div className="bg-rose-400 text-rose-50">
        <Container className="py-6 sm:py-8 px-8 flex gap-4 max-sm:flex-col items-center sm:justify-between">
          <ul className="flex items-center gap-8">
            {preferences["social-links"].map((link) => (
              <li key={link.href}>
                <Link href={link.href}>
                  <span
                    className={cn(
                      "iconify size-6",
                      socialMediaIcon[link.medium]
                    )}
                  />
                </Link>
              </li>
            ))}
          </ul>
          <p className="font-medium capitalize text-rose-100">
            2024 {preferences.title} - All Rights Reserved
          </p>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;
