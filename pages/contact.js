import { useContext } from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "../components/Layout";
import TextField from "../components/TextField";
import CountryContext from "../context/CountryContext";
// import { FaPhone, FaEnvelope, FaLocationArrow } from "react-icons/fa";

const API_URL = "https://dbackendnata.vercel.app";

const pageDetails = {
  title: "Contact page",
  description: "dnata",
  keywords: "dnata",
};

function ContactPage() {
  const { country } = useContext(CountryContext);

  const initialvalues = {
    name: "",
    email: "",
    number: "",
    country: country,
  };

  const validate = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().required("Email is required"),
    number: Yup.string().required("Phone No is required"),
    country: Yup.string().required("Country is required"),
  });

  const handleSubmit = async (values, formik) => {
    const { name, email, number, country } = values;

    const res = await fetch(`${API_URL}/saveinfo`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, number, country }),
    });

    if (res.ok) {
      toast.success("Message sent successfully!");
      console.log(res);
      formik.resetForm();
    } else {
      console.log("status", res.status);
      toast.error("Something went wrong!");
    }
  };

  // const handleSubmit = (values, formik) => {
  //   console.log("Submitted values", values);
  //   formik.resetForm();
  //   toast.success("Form Submitted!");
  // };

  return (
    <Layout pageDetails={pageDetails}>
      <div className="container w-full lg:w-[65%] px-4 py-10 lg:py-20 overflow-hidden">
        <div>
          <div className="space-y-5 text-black">
            <div className="flex flex-wrap">
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
              &nbsp;|&nbsp;
              <a
                href="tel:+8802-8831804"
                className="hover:text-gray-600 transition duration-300"
              >
                8831804
              </a>
              <a
                href="tel:+8802-9847893"
                className="hover:text-gray-600 transition duration-300"
              >
                9847893
              </a>
              &nbsp;|&nbsp;
              <a
                href="tel:+8802-9842924"
                className="hover:text-gray-600 transition duration-300"
              >
                9842924
              </a>
              -
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

              <p className="flex-flex-wrap hover:text-gray-600 transition duration-300">
                The Florida Castle (3rd Floor), Suite- C1, House- 07, Road - 23/
                A, Gulshan -1, Dhaka-1212
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
            >
              {(formik) => (
                <Form>
                  <ToastContainer />
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
                        >
                          <option
                            value=""
                            className="text-slate-400"
                            defaultValue={true}
                            hidden
                          >
                            Select a country
                          </option>
                          <option value="Thailand">Thailand</option>
                          <option value="Myanmar">Myanmar</option>
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
    </Layout>
  );
}

export default ContactPage;
