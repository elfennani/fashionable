import { createContext, ReactNode, useContext } from "react";
import Prefs from "../types/Prefs";

const PrefsContext = createContext<Prefs>({} as Prefs);

export const PrefsProvider = (props: { children: ReactNode; value: Prefs }) => (
  <PrefsContext.Provider {...props} />
);

export const usePrefs = () => useContext(PrefsContext);
