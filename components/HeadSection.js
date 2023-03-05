import Head from "next/head";

function HeadSection({ pageDetails }) {
  return (
    <Head>
      <title>{pageDetails?.title}</title>
      <meta name="description" content={pageDetails?.description} />
      <meta name="keywords" content={pageDetails?.keywords} />
    </Head>
  );
}

HeadSection.defaultProps = {
  pageDetails: {
    title: "Dnata bd",
    description: "dnata",
    keywords: "dnata",
  },
};

export default HeadSection;
