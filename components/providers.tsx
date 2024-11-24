"use client";
import { PrefsProvider } from "@/features/preferences/components/prefs-provider";
import Prefs from "@/features/preferences/types/Prefs";
import queryClient from "@/utils/react-query";
import { QueryClientProvider } from "@tanstack/react-query";
import React, { ReactNode } from "react";

const Providers = ({
  children,
  prefs,
}: {
  children: ReactNode | ReactNode[];
  prefs: Prefs;
}) => {
  return (
    <PrefsProvider value={prefs}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </PrefsProvider>
  );
};

export default Providers;
