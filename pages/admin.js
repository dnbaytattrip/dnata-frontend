import * as Yup from "yup";
import { Formik, Form } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TextField from "../components/TextField";

function AdminPage() {
  const initialvalues = {
    name: "",
    password: "",
  };

  const validate = Yup.object({
    name: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = (values, formik) => {
    console.log("Submitted values", values);
    formik.resetForm();
    toast.success("Form Submitted!");
  };

  return (
    <div className="bg-white h-screen">
      <div className="flex justify-center pt-32 lg:pt-44">
        <div className="bg-custom-blue flex flex-col p-10 shadow-lg">
          <h1 className="text-custom-blue3 text-3xl font-bold text-center ">
            Log In
          </h1>

          <div className="mt-6">
            <Formik
              initialValues={initialvalues}
              validationSchema={validate}
              onSubmit={handleSubmit}
            >
              {(formik) => (
                <Form>
                  <ToastContainer />
                  <div className="text-sm gap-y-5 md:gap-y-7">
                    <div className="w-[320px] md:w-[400px]">
                      <TextField label="Username *" name="name" type="text" />
                    </div>

                    <div className="mt-8 w-[320px] md:w-[400px]">
                      <TextField
                        label="Password *"
                        name="password"
                        type="password"
                      />
                    </div>
                  </div>

                  <div className="mt-10 flex justify-start">
                    <button
                      type="submit"
                      className="px-9 py-3 w-full border-2 border-custom-blue3 text-custom-blue3 text-[11px] tracking-widest font-bold bg-transparent hover:bg-custom-blue3 hover:text-white transition duration-300 uppercase"
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
    </div>
  );
}

export default AdminPage;
