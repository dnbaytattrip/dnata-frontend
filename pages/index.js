import Image from "next/image";
import Link from "next/link";
import CountriesSlider from "../components/CountriesSlider";
import HeadSection from "../components/HeadSection";
import { useSession } from "next-auth/react";

const pageDetails = {
  title: "Dnata ltd",
  description: "dnata",
  keywords: "dnata",
};

function Home() {
  // const { data: session } = useSession();

  // console.log("session from index", session);

  return (
    <>
      <HeadSection pageDetails={pageDetails} />

      <div className="bg-white">
        <div>
          <Image
            src="/images/banners/dnatabd-banner.jpg"
            alt="dnata banner"
            // layout="responsive"
            priority
            width={3556}
            height={1868}
          />
        </div>

        <CountriesSlider />

        <div className="">
          <Link href="/flight">
            <Image
              src="/images/banners/travel-with-dnata-wide.jpg"
              alt="dnata banner"
              // layout="responsive"
              priority
              width={4448}
              height={2094}
            />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
