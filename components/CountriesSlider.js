import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";
import { countries } from "../data/countries";
// import "swiper/css/scrollbar";
// import "swiper/css/autoplay";

function CountriesSlider() {
  return (
    <div className="my-1">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={4}
        slidesPerView={1}
        slidesPerGroup={1}
        // centeredSlides={true}
        navigation
        // navigation={{ nextEl: ".swiper_next", prevEl: ".swiper_prev" }}
        loop={true}
        pagination={{ clickable: true }}
        // pagination={{ el: ".swiper_pagination", clickable: true }}
        // slidesOffsetBefore={0}
        // slideToClickedSlide={true}
        speed={500}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
          // waitForTransition: true,
        }}
        breakpoints={{
          768: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            speed: 1500,
          },
        }}
        // cssMode={true}
        // className="flex justify-center"

        // onSwiper={(swiper) => console.log(swiper)}
        // onSwiper={(s) => setSwiper(s)}
      >
        {countries.map((country, i) => (
          <SwiperSlide key={i}>
            <Link href={`/contact?country=${country.name}`} passHref>
              <a>
                <div className="h-[450px] lg:h-[850px] relative mx-auto group">
                  <Image
                    src={country.image}
                    alt={country.name}
                    className="group-hover:scale-105 transition duration-1000"
                    layout="fill"
                    objectFit="cover"
                    priority
                  />

                  <h1 className="absolute inset-y-0 w-full flex justify-center items-center text-4xl lg:text-6xl font-Merienda font-bold text-white select-none">
                    {country.name}
                  </h1>
                </div>
              </a>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default CountriesSlider;
