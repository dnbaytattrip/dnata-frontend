import Image from "next/image";
import Link from "next/link";
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

        <div className="my-10 lg:my-20 mx-4 lg:mx-10">
          <Link href="/holiday" passHref>
            <Image
              src="/images/banners/escape-to-holiday.jpg"
              alt="dnata banner"
              layout="responsive"
              priority
              width={3556}
              height={1868}
            />
          </Link>
        </div>

        <div className="">
          <Link href="/shipping" passHref>
            <Image
              src="/images/banners/shipping-dnata.jpg"
              alt="dnata banner"
              layout="responsive"
              priority
              width={3556}
              height={1868}
            />
          </Link>
        </div>

        <div className="">
          <Link href="/flight" passHref>
            <Image
              src="/images/banners/travel-with-dnata-wide.jpg"
              alt="dnata banner"
              layout="responsive"
              priority
              width={3556}
              height={1868}
            />
          </Link>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
