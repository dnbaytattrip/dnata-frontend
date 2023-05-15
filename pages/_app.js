import { SessionProvider, useSession } from "next-auth/react";
import { ToastContainer } from "react-toastify";
import Layout from "../components/Layout";
import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <ToastContainer />

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}

export default MyApp;
