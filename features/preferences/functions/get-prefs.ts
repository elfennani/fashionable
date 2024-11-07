import supabase from "@/utils/supabase";
import Prefs from "../types/Prefs";

export default async function getPrefs() {
  const { data, error } = await supabase.from("preferences").select();

  if (error) throw error;
  const preferences = data.reduce(
    (prefs, curr) => ({
      ...prefs,
      [curr.key]: curr.type == "json" ? JSON.parse(curr.value) : curr.value,
    }),
    {} as Partial<Prefs>
  ) as Prefs;

  return preferences;
}
