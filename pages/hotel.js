import Image from "next/image";
import HeadSection from "../components/HeadSection";

const pageDetails = {
  title: "Hotel page",
  description: "dnata",
  keywords: "dnata",
};

function HotelPage() {
  return (
    <>
      <HeadSection pageDetails={pageDetails} />
      <div className="">
        <Image
          src="/images/banners/hotel-poster.jpg"
          alt="dnata banner"
          layout="responsive"
          priority
          width={2400}
          height={1350}
        />
      </div>

      <div className="my-10 lg:my-20 mx-4 lg:container">
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

export default HotelPage;
