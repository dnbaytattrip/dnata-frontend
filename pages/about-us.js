import Layout from "../components/Layout";

const pageDetails = {
  title: "Flight page",
  description: "dnata",
  keywords: "dnata",
};

function AboutUsPage() {
  return (
    <Layout pageDetails={pageDetails}>
      <div className="my-10 lg:my-20 mx-4 lg:container">
        <h1 className="text-3xl font-bold text-center">About Us</h1>
        <div className="my-20 grid grid-cols-1 lg:grid-cols-3 gap-y-20 lg:gap-x-20 ">
          <div className="flex flex-col gap-4">
            <h1 className="text-xl font-bold text-center">Founder</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              voluptate consequuntur neque ipsa officiis quas. Possimus minima
              cupiditate, tempora omnis expedita molestiae aliquid voluptatum
              maiores nostrum reprehenderit libero, perspiciatis autem!
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-xl font-bold text-center">Chairman</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              voluptate consequuntur neque ipsa officiis quas. Possimus minima
              cupiditate, tempora omnis expedita molestiae aliquid voluptatum
              maiores nostrum reprehenderit libero, perspiciatis autem!
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-xl font-bold text-center">Managing Director</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              voluptate consequuntur neque ipsa officiis quas. Possimus minima
              cupiditate, tempora omnis expedita molestiae aliquid voluptatum
              maiores nostrum reprehenderit libero, perspiciatis autem!
            </p>
          </div>
        </div>

        <div className="py-20">
          <h1 className="text-center text-3xl font-bold">
            Our Misssion and Vision
          </h1>
          <p className="mt-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            praesentium laboriosam enim consectetur nisi quibusdam optio
            obcaecati expedita laborum, adipisci illum quos odit laudantium
            dolore libero velit aut quam eligendi autem. Ipsum, odio eum
            doloremque culpa deleniti ducimus omnis odit reiciendis? Dolore
            libero, suscipit veritatis incidunt architecto autem expedita iusto
            quos quasi molestias est unde quas minus, quis ratione deserunt
            perferendis esse repellendus nulla explicabo modi sunt laboriosam?
            Porro iste quaerat neque eius quibusdam, hic praesentium assumenda
            accusantium dolores a ipsum cumque veritatis eum. Quae nostrum
            numquam quidem beatae accusantium enim ducimus facilis autem ipsum,
            fuga hic! Perferendis, delectus cum?
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default AboutUsPage;
