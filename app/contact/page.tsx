import Button from "@/components/button";
import Container from "@/components/container";
import PageHeader from "@/components/page-header";
import FormInput from "@/features/contact/components/form-input";
import FormInputContainer from "@/features/contact/components/form-input-container";
import { cn } from "@/utils/cn";
import { NextPage } from "next";

const ContactPage: NextPage = () => {
  return (
    <main>
      <PageHeader
        title="Contactez-Nous"
        subtitle="Nous sommes là pour répondre à toutes vos questions et vous aider"
      />
      <Container className="py-4 gap-4 md:gap-8 md:py-8 lg:gap-16 lg:py-16 grid grid-cols-1 lg:grid-cols-[20rem_1fr]">
        <div className="flex flex-col max-lg:md:flex-row gap-6">
          <ContactInfo
            className="max-lg:md:flex-1"
            iconClassName="teenyicons--phone-solid md"
            title="Téléphone"
          >
            +212 6 12 34 56 78
          </ContactInfo>
          <ContactInfo
            className="max-lg:md:flex-1"
            iconClassName="teenyicons--at-outline"
            title="Email"
          >
            contact@example.ma
          </ContactInfo>
        </div>
        <div className="bg-neutral-100 p-4 md:p-8 flex flex-col gap-6 sm:gap-8">
          <div>
            <h1 className="font-display font-bold text-2xl sm:text-4xl mb-2">
              Envoyer un message
            </h1>
            <p className="font-light uppercase sm:text-lg">
              Laissez-nous un message, et nous vous répondrons dans les plus
              brefs délais
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <FormInputContainer label="nom complet">
              <FormInput type="text" placeholder="Nizar Elfennani" />
            </FormInputContainer>
            <FormInputContainer label="Téléphone">
              <FormInput type="tel" placeholder="06 12 34 56 78" />
            </FormInputContainer>
            <FormInputContainer label="Email">
              <FormInput type="email" placeholder="contact@example.ma" />
            </FormInputContainer>
          </div>
          <hr className="border-neutral-300" />
          <FormInputContainer label="Message">
            <textarea
              placeholder="Message"
              className="px-4 py-3 bg-white placeholder:text-neutral-300 min-h-40"
            ></textarea>
          </FormInputContainer>
          <Button className="sm:self-end">
            Envoyer <span className="iconify teenyicons--send-outline size-6" />
          </Button>
        </div>
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
