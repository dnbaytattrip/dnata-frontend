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
        <div className="">
          <Link href="/contact" passHref>
            <a>
              <div className="my-24 grid grid-cols-1 lg:grid-cols-2 ">
                <div className="h-[400px] lg:h-[1000px] relative">
                  <Image
                    src="/images/banners/thailand.jpg"
                    alt="thailand"
                    className="hover:scale-105 transition duration-1000"
                    layout="fill"
                    objectFit="cover"
                    priority
                    // width={1920}
                    // height={1080}
                  />

                  <h1 className="absolute top-1/2 left-1/4 text-4xl lg:text-8xl font-Merienda font-bold text-white">
                    THAILAND
                  </h1>
                </div>

                <div className="h-[400px] lg:h-[1000px] relative">
                  <Image
                    src="/images/banners/myanmar.jpg"
                    alt="myanmar"
                    className="hover:scale-105 transition duration-1000"
                    layout="fill"
                    objectFit="cover"
                    priority
                    //  width={2560}
                    //   height={1600}
                  />

                  <h1 className="absolute top-1/2 left-1/4 text-4xl lg:text-8xl font-Merienda font-bold text-white">
                    MYANMAR
                  </h1>
                </div>
              </div>
            </a>
          </Link>
        </div>

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
