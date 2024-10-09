"use client";
import Button from "@/components/button";
import Container from "@/components/container";
import PageHeader from "@/components/page-header";
import FormInput from "@/features/contact/components/form-input";
import FormInputContainer from "@/features/contact/components/form-input-container";
import { NextPage } from "next";

const ValidationPage: NextPage<object> = ({}) => {
  return (
    <div>
      <PageHeader
        title="Finalisez Votre Commande"
        subtitle="Vérifiez vos informations et confirmez votre achat en toute sécurité"
        contentId={null}
      />
      <form onSubmit={(e) => e.preventDefault()}>
        <Container className="grid grid-cols-1 lg:grid-cols-2 items-start py-4 md:py-8 lg:py-16 gap-4 md:gap-8 lg:gap-16">
          <div className="flex flex-col gap-4">
            <h1>Coordonnées</h1>
            <hr className="border-neutral-200" />
            <div className="flex flex-col gap-6">
              <FormInputContainer label="nom complet">
                <FormInput
                  type="text"
                  placeholder="Nizar Elfennani"
                  className="border border-neutral-200"
                />
              </FormInputContainer>
              <FormInputContainer label="Téléphone">
                <FormInput
                  type="tel"
                  placeholder="06 12 34 56 78"
                  className="border border-neutral-200"
                />
              </FormInputContainer>
              <FormInputContainer label="Adresse de livraison">
                <FormInput
                  type="text"
                  placeholder="Rue inconnu, 1234"
                  className="border border-neutral-200"
                />
              </FormInputContainer>
              <FormInputContainer label="Ville">
                <FormInput
                  type="text"
                  placeholder="Alhoceima"
                  className="border border-neutral-200"
                />
              </FormInputContainer>
            </div>
          </div>
          <div className="p-6 gap-6 bg-rose-50 flex flex-col">
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center gap-4">
                <h3 className="text-xs uppercase">Sous-total</h3>
                <p className="font-bold">507.99 MAD</p>
              </div>
              <div className="flex justify-between items-center gap-4">
                <h3 className="text-xs uppercase">LIVRAISON</h3>
                <p className="font-bold">47 MAD</p>
              </div>
            </div>
            <hr className="border-neutral-200" />
            <div className="flex justify-between items-center gap-4">
              <h3 className="text-xl sm:text-2xl font-bold uppercase">TOTAL</h3>
              <p className="font-light text-rose-400 text-4xl sm:text-5xl tracking-tighter">
                554.99 MAD
              </p>
            </div>
            <Button>
              Commander
              <span className="iconify teenyicons--send-outline size-6" />
            </Button>
          </div>
        </Container>
      </form>
    </div>
  );
};

export default ValidationPage;
