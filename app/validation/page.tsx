"use client";
import PageHeader from "@/components/page-header";
import OrderingContent from "@/features/ordering/components/ordering-content";
import { NextPage } from "next";

const ValidationPage: NextPage<object> = ({}) => {
  return (
    <div>
      <PageHeader
        title="Finalisez Votre Commande"
        subtitle="Vérifiez vos informations et confirmez votre achat en toute sécurité"
        contentId={null}
      />
      <OrderingContent />
    </div>
  );
};

export default ValidationPage;
