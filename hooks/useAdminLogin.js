// import { toast } from "react-toastify";
// import { signIn, useSession } from "next-auth/react";
// import { useRouter } from "next/router";

// function useLogin() {
//   const router = useRouter();

//   // const { data } = useSession();
//   // const { id, user_name, institution_name, role } = data ? data.user : "";

//   // const loginUser = async (values, formik) => {
//   //   if (values.username !== values.password) {
//   //     toast.error("Username and Password do not match");
//   //   } else {
//   //     const res = await signIn("credentials", {
//   //       ...values,
//   //       // callbackUrl: `${window.location.origin}/`,
//   //       redirect: false,
//   //     });

//   //     const { ok, error } = res;

//   //     if (ok) {
//   //       console.log(res);
//   //       toast.success("Signed in Successfully");
//   //       await router.push("/");
//   //     }
//   //     // else {
//   //     //   toast.error("Something went wrong");
//   //     // }
//   //     if (error) {
//   //       console.log(res);
//   //       toast.error(error);
//   //       // toast.error("Something went wrong");
//   //     }
//   //   }
//   // };

//   const loginUser = async (values, formik) => {
//     const res = await signIn("credentials", {
//       ...values,
//       // callbackUrl: `${window.location.origin}/`,
//       redirect: false,
//     });

//     const { ok, error } = res;

//     if (ok) {
//       console.log(res);
//       toast.success("Signed in Successfully");
//       await router.push("/");
//     }
//     // else {
//     //   toast.error("Something went wrong");
//     // }
//     if (error) {
//       console.log(res);
//       toast.error(error);
//       // toast.error("Something went wrong");
//     }
//   };

//   return { loginUser };
// }

// export default useLogin;

// import { toast } from "react-toastify";
// import { signIn, useSession } from "next-auth/react";
// import { useRouter } from "next/router";

// function useLogin() {
//   const router = useRouter();

//   const { data, status } = useSession();

//   const loginUser = async (values) => {
//     const res = await signIn("google", {
//       callbackUrl: `${window.location.origin}`,
//     });

//     if (res?.ok) {
//       console.log("res", res);
//       router.reload();
//       // toast.success("Signed in Successfully");
//       toast.success("Signed in Successfully");
//       // router.push("/dashboard");
//     }

//     if (res?.error) {
//       // router.reload();
//       console.log(res);
//       toast.error(res?.error);
//     }
//   };

//   return { loginUser };
// }

// export default useLogin;

//with credentials
import { toast } from "react-toastify";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";

function useAdminLogin() {
  const router = useRouter();

  const { data, status } = useSession();

  const loginAdmin = async (values) => {
    // try {
    //   const res = await signIn("credentials", {
    //     ...values,
    //     // callbackUrl: `${window.location.origin}/dashboard`,
    //     redirect: false,
    //     // redirect: true,
    //   });

    //   toast.success("Signed in Successfully");
    //   router.push("/admin");

    //   console.log("res is", res);
    // } catch (error) {
    //   console.log("error", error);
    //   // toast.error(error);
    //   toast.error("Something went wrong");
    // }

    const res = await signIn("credentials", {
      ...values,
      // callbackUrl: `${window.location.origin}/dashboard`,
      redirect: false,
    });

    // const { ok, error } = res;

    if (res?.ok) {
      // console.log(res);
      // router.reload();
      // toast.success("Signed in Successfully");
      toast.success("Signed in Successfully");
      router.push("/admin");
    }

    if (res?.error) {
      // router.reload();
      console.log(res);
      toast.error(res?.error);
    }
  };

  return { loginAdmin };
}

export default useAdminLogin;
