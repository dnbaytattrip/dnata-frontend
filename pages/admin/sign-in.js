// import { useRouter } from "next/router";
// import * as Yup from "yup";
// import { Formik, Form } from "formik";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import TextField from "../components/TextField";
// import { API_URL } from "../config";

// function AdminPage() {
//   const router = useRouter();

//   const initialvalues = {
//     email: "",
//     password: "",
//   };

//   const validate = Yup.object({
//     email: Yup.string().required("Email is required"),
//     password: Yup.string().required("Password is required"),
//   });

//   const handleSubmit = async (values, formik) => {
//     const { email, password } = values;

//     const res = await fetch(`${API_URL}/login`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ email, password }),
//     });

//     const data = await res.json();

//     console.log("data", data);

//     if (data.text === "success") {
//       // toast.success("Success!");
//       router.push("/dashboard");
//       localStorage.setItem("token-dnata", data.token);
//     } else if (data.text === "not found") {
//       toast.error("Email not found");
//     } else if (data.text === "failure") {
//       toast.error("Wrong Password");
//     } else {
//       toast.error("Something went wrong!");
//       console.log(res);
//     }
//   };

//   return (
//     <div className="bg-white h-screen">
//       <div className="flex justify-center pt-32 lg:pt-44">
//         <div className="bg-custom-blue flex flex-col p-10 shadow-lg">
//           <h1 className="text-custom-blue3 text-3xl font-bold text-center ">
//             Log In
//           </h1>

//           <div className="mt-6">
//             <Formik
//               initialValues={initialvalues}
//               validationSchema={validate}
//               onSubmit={handleSubmit}
//             >
//               {(formik) => (
//                 <Form>
//                   <ToastContainer />
//                   <div className="text-sm gap-y-5 md:gap-y-7">
//                     <div className="w-[320px] md:w-[400px]">
//                       <TextField label="Email *" name="email" type="email" />
//                     </div>

//                     <div className="mt-8 w-[320px] md:w-[400px]">
//                       <TextField
//                         label="Password *"
//                         name="password"
//                         type="password"
//                         autoComplete="on"
//                       />
//                     </div>
//                   </div>

//                   <div className="mt-10 flex justify-start">
//                     <button
//                       type="submit"
//                       className="px-9 py-3 w-full border-2 border-custom-blue3 text-custom-blue3 text-[11px] tracking-widest font-bold bg-transparent hover:bg-custom-blue3 hover:text-white transition duration-300 uppercase"
//                     >
//                       Submit
//                     </button>
//                   </div>
//                 </Form>
//               )}
//             </Formik>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AdminPage;

import { Formik, Form } from "formik";
import { PasswordField, TextField } from "../../components/InputField";
import useAdminLogin from "../../hooks/useAdminLogin";
import HeadSection from "../../components/HeadSection";
import { Loader2 } from "../../components/Loader";

const pageDetails = {
  title: "Admin sign in page",
  description: "dnata",
  keywords: "dnata",
};

function AdminLoginPage() {
  const initialvalues = {
    email: "",
    password: "",
  };

  const { loginAdmin } = useAdminLogin();

  const handleSubmit = async (values) => {
    await loginAdmin(values);
    // console.log(values);
  };

  return (
    <>
      <HeadSection pageDetails={pageDetails} />
      <div className="flex justify-center items-center h-screen bg-gray-200">
        {/* {loading && <FullPageLoader />} */}

        <div className="bg-gray-50 px-5 lg:px-10 py-14 shadow-lg rounded-lg">
          <h1 className="text-2xl font-bold text-center text-custom-blue3">
            Sign in as Admin
          </h1>
          <div className="mt-8">
            <Formik
              initialValues={initialvalues}
              // validationSchema={validate}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form>
                  <div className="gap-y-5 md:gap-y-7">
                    <div className="min-w-[300px] lg:min-w-[350px] space-y-4">
                      <TextField label="Email *" name="email" type="text" />

                      <PasswordField label="Password *" name="password" />
                    </div>

                    <button
                      type="submit"
                      className="relative mt-8 w-full py-3 bg-custom-blue2 rounded-lg    text-white font-bold active:scale-95 disabled:active:scale-100 transition duration-300  disabled:opacity-80 disabled:cursor-not-allowed"
                      disabled={isSubmitting}
                    >
                      {isSubmitting && (
                        <span className="absolute flex left-[30%] items-center inset-y-0">
                          <Loader2 width="30" />
                        </span>
                      )}
                      <span>Sign In</span>
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
            {/* <div className="mt-5">
              <Link
                href="/forgot-password"
                className="text-sm text-blue-400 hover:text-blue-900"
              >
                Forgot Password?
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

// export async function getServerSideProps(context) {
//   const session = await getSession(context);

//   if (session) {
//     return {
//       redirect: {
//         destination: "/",
//         permanent: false,
//       },
//     };
//   }

//   return {
//     props: {},
//   };
// }

export default AdminLoginPage;
