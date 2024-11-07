import supabase from "@/utils/supabase";
import { NextResponse } from "next/server";

export const dynamic = "force-static";

export const GET = async () => {
  return NextResponse.json(
    (
      await supabase
        .from("product")
        .select("*, images ( * ), category!inner(*)")
        .eq("archived", false)
        .throwOnError()
    ).data
  );
};
