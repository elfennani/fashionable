"use client";
import queryClient from "@/utils/react-query";
import { QueryClientProvider } from "@tanstack/react-query";
import React from "react";

const Providers = ({ children }: { children: any }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default Providers;
