import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

function Countries() {
  const [country, setCountry] = useState("");

  console.log(country);

  return (
    <div>
      <Link href="/contact" passHref>
        <a>
          <div className="my-1 grid grid-cols-1 lg:grid-cols-2 gap-1">
            <div
              className="h-[400px] lg:h-[1000px] relative"
              onClick={() => setCountry("Thailand")}
            >
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

            <div
              className="h-[400px] lg:h-[1000px] relative"
              onClick={() => setCountry("Myanmar")}
            >
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
  );
}

export default Countries;
