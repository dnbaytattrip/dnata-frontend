import "../styles/globals.css";
import { CountryProvider } from "../context/CountryContext";

function MyApp({ Component, pageProps }) {
  return (
    <CountryProvider>
      <Component {...pageProps} />
    </CountryProvider>
  );
}

export default MyApp;
