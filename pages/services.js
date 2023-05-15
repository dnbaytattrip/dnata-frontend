import Image from "next/image";
import CountriesSlider from "../components/CountriesSlider";
import HeadSection from "../components/HeadSection";

const pageDetails = {
  title: "Services page",
  description: "dnata",
  keywords: "dnata",
};

function Servicespage() {
  return (
    <>
      <HeadSection pageDetails={pageDetails} />
      <div className="">
        <Image
          src="/images/banners/visa-poster.jpg"
          alt="dnata banner"
          // layout="responsive"
          priority
          width={6000}
          height={3136}
        />
      </div>

      <CountriesSlider />

      <div className="my-10 lg:my-20 container">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse, dolore.
        Maxime, odit fuga sunt iusto aperiam eaque provident qui laudantium
        nulla voluptates doloremque blanditiis! Est corrupti omnis obcaecati
        quidem, ab porro repellendus officia possimus praesentium cumque
        quibusdam fuga. Esse soluta quae molestiae repudiandae eligendi et
        voluptatem amet inventore dolore molestias voluptatum dolorem natus sit
        suscipit quidem adipisci, impedit a explicabo minima voluptas error.
        Architecto suscipit eaque, ducimus aut magni culpa. Corrupti dolorum
        beatae consequuntur officiis voluptatibus earum, quo eius perspiciatis
        dolorem voluptas. Necessitatibus, a quam delectus voluptatum natus
        veniam sequi similique, ex laboriosam aliquam asperiores molestiae,
        numquam vel qui recusandae.
      </div>
    </>
  );
}

export default Servicespage;
