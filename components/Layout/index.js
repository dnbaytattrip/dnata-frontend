import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";

function Layout({ children, pageDetails }) {
  const { title, description, keywords } = pageDetails;

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>

      <div>
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
}

Layout.defaultProps = {
  title: "Dnata bd",
  description: "dnata",
  keywords: "dnata",
};

export default Layout;
