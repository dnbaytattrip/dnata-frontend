import { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import CountryContext from "../context/CountryContext";

function Countries() {
  const { selectCountry } = useContext(CountryContext);

  return (
    <div>
      <Link href="/contact">
        <div className="my-1 grid grid-cols-1 lg:grid-cols-2 gap-1">
          <div
            className="h-[400px] lg:h-[1000px] relative"
            onClick={() => selectCountry("Thailand")}
          >
            <Image
              src="/images/banners/thailand.jpg"
              alt="thailand"
              className="object-cover hover:scale-105 transition duration-1000"
              fill
              priority
              // width={1920}
              // height={1080}
            />

            <h1 className="absolute top-1/2 w-full text-center text-4xl lg:text-8xl font-Merienda font-bold text-white">
              THAILAND
            </h1>
          </div>

          <div
            className="h-[400px] lg:h-[1000px] relative"
            onClick={() => selectCountry("Myanmar")}
          >
            <Image
              src="/images/banners/myanmar.jpg"
              alt="myanmar"
              className="object-cover hover:scale-105 transition duration-1000"
              fill
              priority
              //  width={2560}
              //   height={1600}
            />

            <h1 className="absolute top-1/2 w-full text-center text-4xl lg:text-8xl font-Merienda font-bold text-white">
              MYANMAR
            </h1>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Countries;
