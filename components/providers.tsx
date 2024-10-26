"use client";
import queryClient from "@/utils/react-query";
import { QueryClientProvider } from "@tanstack/react-query";
import React, { ReactNode } from "react";

const Providers = ({ children }: { children: ReactNode | ReactNode[] }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default Providers;
