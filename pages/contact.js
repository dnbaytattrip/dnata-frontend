import { useRouter } from "next/router";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import HeadSection from "../components/HeadSection";
import { countries } from "../data/countries";
import TextField from "../components/TextField";
import usePostData from "../hooks/usePostData";
// import { FaPhone, FaEnvelope, FaLocationArrow } from "react-icons/fa";

const pageDetails = {
  title: "Contact page",
  description: "dnata",
  keywords: "dnata",
};

function ContactPage() {
  const router = useRouter();

  const countryParam = router.query.country;

  const initialvalues = {
    name: "",
    email: "",
    number: "",
    country: countryParam || "",
  };

  const validate = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().required("Email is required"),
    number: Yup.string().required("Phone No is required"),
    country: Yup.string().required("Country is required"),
  });

  const { postData } = usePostData("/saveInfo");

  const handleSubmit = (values, formik) => {
    // console.log(values);
    // return;

    postData(values, formik);
  };

  return (
    <>
      <HeadSection pageDetails={pageDetails} />
      <div className="container w-full lg:w-[65%] px-4 py-10 lg:py-20 overflow-hidden">
        <div>
          <div className="space-y-5 text-black">
            <div className="flex">
              {/* <span>
                <FaPhone className="inline mr-2" />
              </span> */}
              <p className="inline mr-2 font-bold">Phone:</p>
              <a
                href="tel:+8802-9848304"
                className="hover:text-gray-600 transition duration-300"
              >
                (+8802) 9848304
              </a>
              <span>&nbsp;|&nbsp;</span>
              <a
                href="tel:+8802-8831804"
                className="hover:text-gray-600 transition duration-300"
              >
                8831804
              </a>
              <span>&nbsp;|&nbsp;</span>
              <a
                href="tel:+8802-9847893"
                className="hover:text-gray-600 transition duration-300"
              >
                9847893
              </a>
              <span>&nbsp;|&nbsp;</span>
              <a
                href="tel:+8802-9842924"
                className="hover:text-gray-600 transition duration-300"
              >
                9842924
              </a>
              <span>-</span>
              <a
                href="tel:+8802-9842925"
                className="hover:text-gray-600 transition duration-300"
              >
                5
              </a>
            </div>
            <div className="flex">
              {/* <span>
                <FaEnvelope className="inline mr-2" />
              </span> */}
              <p className="inline mr-2 font-bold">Email:</p>

              <a
                href="mailto:info@dnatabd.com"
                className="hover:text-gray-600 transition duration-300"
              >
                info@dnatabd.com
              </a>
            </div>
            <div className="flex">
              {/* <span>
                <FaLocationArrow className="inline mr-2" />
              </span> */}
              <p className="inline mr-2 font-bold">Address:</p>

              <p className="hover:text-gray-600 transition duration-300">
                The Florida Castle (3rd Floor), Suite-C1, House-07, Road-23/A,
                Gulshan-1, Dhaka-1212
              </p>
            </div>
          </div>

          <h1 className="mt-20 pl-5 text-3xl font-bold text-center uppercase">
            Contact Us
          </h1>
          <p className="mt-3 lg:mt-6 text-[13px] lg:text-base leading-relaxed">
            Please fill the form below and Dnata agent will contact you within
            24 hours
          </p>

          <div className="mt-6">
            <Formik
              initialValues={initialvalues}
              validationSchema={validate}
              onSubmit={handleSubmit}
              // enableReinitialize
            >
              {(formik) => (
                <Form>
                  <div className="grid grid-cols-2 text-sm gap-x-7 gap-y-5 md:gap-y-7">
                    <div className="col-span-2 sm:col-span-1">
                      <TextField label="Name *" name="name" type="text" />
                    </div>

                    <div className="col-span-2 sm:col-span-1">
                      <TextField
                        label="Email Address *"
                        name="email"
                        type="email"
                      />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <TextField label="Phone No *" name="number" type="text" />
                    </div>

                    {/* <div className="col-span-2 sm:col-span-1">
                      <TextField
                        label="Country You Want To Visit *"
                        name="country"
                        type="text"
                        select='true'
                      />
                    </div> */}

                    <div className="col-span-2 sm:col-span-1">
                      <label htmlFor="country">
                        Country You Want To Visit *
                      </label>
                      <div className="my-2 relative">
                        <Field
                          as="select"
                          name="country"
                          id="country"
                          className="p-2 w-full outline-none border border-slate-300 focus:border-custom-blue3"
                          onClick={() =>
                            formik.values.country &&
                            router.replace(
                              `/contact?country=${formik.values.country}`
                            )
                          }
                        >
                          <option
                            value=""
                            className="text-slate-400"
                            defaultValue={true}
                            hidden
                          >
                            Select a country
                          </option>

                          {countries.map((country, i) => (
                            <option key={i} value={country.name}>
                              {country.name}
                            </option>
                          ))}

                          {/* <option
                            value="Thailand"
                            // onChange={() =>
                            //   router.push(`/contact?country=thailand`)
                            // }
                          >
                            Thailand
                          </option> */}

                          {/* <option
                            value="Myanmar"
                            // onChange={() =>
                            //   router.push(`/contact?country=myanmar`)
                            // }
                          >
                            Myanmar
                          </option> */}
                        </Field>

                        <p className="absolute -bottom-4 text-red-600 text-xs">
                          <ErrorMessage name="country" />
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 flex justify-start">
                    <button
                      type="submit"
                      className="px-9 py-3 border-2 border-custom-blue3 text-custom-blue3 text-[11px] tracking-widest font-bold bg-transparent hover:bg-custom-blue3 hover:text-white transition duration-300 uppercase"
                    >
                      Submit
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactPage;
