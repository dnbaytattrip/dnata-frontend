import { createContext, useState } from "react";

const CountryContext = createContext();

export const CountryProvider = ({ children }) => {
  const [country, setCountry] = useState("");

  const selectCountry = (prop) => {
    setCountry(prop);
  };

  return (
    <CountryContext.Provider value={{ country, selectCountry }}>
      {children}
    </CountryContext.Provider>
  );
};

export default CountryContext;
