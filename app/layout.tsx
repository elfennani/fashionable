import type { Metadata } from "next";
import { Lato, Playfair_Display } from "next/font/google";
import "./globals.css";
import NavHeader from "@/components/nav-header";
import Footer from "@/components/footer";
import NextTopLoader from "nextjs-toploader";
import colors from "tailwindcss/colors";
import Providers from "@/components/providers";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import getPrefs from "@/features/preferences/functions/get-prefs";

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: ["400", "300", "700"],
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["700", "900"],
  display: "optional",
});

export const generateMetadata = async (): Promise<Metadata> => {
  const { title, description, keywords } = await getPrefs();

  return {
    title: {
      template: `%s | ${title}`,
      default: title,
    },
    description,
    keywords,
    applicationName: title,
  };
};
// export const revalidate = 0;
export const dynamic = "force-static";
export const fetchCache = "only-no-store";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const prefs = await getPrefs();

  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfairDisplay.variable} ${lato.className} antialiased text-gray-700 group/body scroll-smooth`}
      >
        <NuqsAdapter>
          <NextTopLoader color={colors.pink[400]} showSpinner={false} />
          <NavHeader logo={prefs.logo} title={prefs.title} />
          <Providers>{children}</Providers>
          <Footer />
        </NuqsAdapter>
      </body>
    </html>
  );
}
