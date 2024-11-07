import Container from "@/components/container";
import PageHeader from "@/components/page-header";
import ContactForm from "@/features/contact/components/contact-form";
import getPrefs from "@/features/preferences/functions/get-prefs";
import { cn } from "@/utils/cn";
import { NextPage } from "next";

const ContactPage: NextPage = async () => {
  const prefs = await getPrefs();

  return (
    <main>
      <PageHeader
        iconClassname="teenyicons--contact-outline"
        title="Contactez-Nous"
        subtitle="Nous sommes là pour répondre à toutes vos questions et vous aider"
      />
      <Container
        id="content"
        className="py-4 gap-4 md:gap-8 md:py-8 lg:gap-16 lg:py-16 grid grid-cols-1 lg:grid-cols-[20rem_1fr]"
      >
        <div className="flex flex-col max-lg:md:flex-row gap-6">
          <ContactInfo
            className="max-lg:md:flex-1"
            iconClassName="teenyicons--phone-solid md"
            title="Téléphone"
          >
            {prefs.phone}
          </ContactInfo>
          <ContactInfo
            className="max-lg:md:flex-1"
            iconClassName="teenyicons--at-outline"
            title="Email"
          >
            {prefs.email}
          </ContactInfo>
        </div>
        <ContactForm />
      </Container>
    </main>
  );
};

type ContactInfoProps = {
  iconClassName: string;
  title: string;
  children: string;
  className?: string;
};

const ContactInfo = (props: ContactInfoProps) => (
  <div
    className={cn(
      "flex justify-center items-center gap-4 p-4 border border-neutral-200",
      props.className
    )}
  >
    <div className="p-4 flex border border-rose-400 text-rose-400 rounded-full">
      <span className={cn("iconify size-6", props.iconClassName)} />
    </div>
    <div className="flex-1">
      <h2 className="text-2xl leading-none font-light">{props.title}</h2>
      <p className="text-neutral-500">{props.children}</p>
    </div>
  </div>
);

export default ContactPage;
