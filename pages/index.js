import Image from "next/image";
import Link from "next/link";
import Countries from "../components/Countries";
import Layout from "../components/Layout";

const pageDetails = {
  title: "Dnata ltd",
  description: "dnata",
  keywords: "dnata",
};

function Home() {
  return (
    <Layout pageDetails={pageDetails}>
      <div className="bg-white">
        <div>
          <Image
            src="/images/banners/home.jpg"
            alt="dnata banner"
            layout="responsive"
            priority
            width={3556}
            height={1868}
          />
        </div>

        <Countries />

        <div className="">
          <Link href="/flight" passHref>
            <Image
              src="/images/banners/travel-with-dnata-wide.jpg"
              alt="dnata banner"
              layout="responsive"
              priority
              width={4448}
              height={2094}
            />
          </Link>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
