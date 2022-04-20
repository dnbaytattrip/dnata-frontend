import * as Yup from "yup";
import { useFormik, Formik, Form } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "../components/Layout";
import TextField from "../components/TextField";

const pageDetails = {
  title: "Contact page",
  description: "dnata",
  keywords: "dnata",
};

function ContactPage() {
  const initialvalues = {
    name: "",
    email: "",
    phone: "",
    country: "",
  };

  const validate = Yup.object({
    name: Yup.string().required("First Name is required"),
    email: Yup.string().required("Email is required"),
    phone: Yup.string().required("Phone No is required"),
    country: Yup.string().required("Country is required"),
  });

  return (
    <Layout pageDetails={pageDetails}>
      <div className="container w-full lg:w-[65%] px-4 py-10 lg:py-20 overflow-hidden">
        <div className="">
          <h1 className="pl-5 text-3xl font-bold text-center uppercase">
            Contact Us
          </h1>
          <p className="mt-3 lg:mt-6 text-[13px] lg:text-base leading-relaxed">
            Use the form below to contact us regarding our services or other
            inquiries. Someone will contact you within 1-2 business days.
          </p>

          <div className="mt-6">
            <Formik
              initialValues={initialvalues}
              validationSchema={validate}
              onSubmit={(values, { resetForm }) => {
                console.log("Submitted values", values);
                resetForm();
                toast.success("Form Submitted");
              }}
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
                      <TextField label="Phone No *" name="phone" type="text" />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <TextField
                        label="Country You Want To Visit *"
                        name="country"
                        type="text"
                      />
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
