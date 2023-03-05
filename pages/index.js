import Image from "next/image";
import Link from "next/link";
import CountriesSlider from "../components/CountriesSlider";
import HeadSection from "../components/HeadSection";

const pageDetails = {
  title: "Dnata ltd",
  description: "dnata",
  keywords: "dnata",
};

function Home() {
  return (
    <>
      <HeadSection pageDetails={pageDetails} />

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

        <CountriesSlider />

        <div className="">
          <Link href="/flight" passHref>
            <a>
              <Image
                src="/images/banners/travel-with-dnata-wide.jpg"
                alt="dnata banner"
                layout="responsive"
                priority
                width={4448}
                height={2094}
              />
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
