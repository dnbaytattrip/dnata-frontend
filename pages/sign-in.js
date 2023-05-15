import Image from "next/image";
import useLogin from "../hooks/useLogin";
import HeadSection from "../components/HeadSection";

const pageDetails = {
  title: "Sign in page",
  description: "dnata",
  keywords: "dnata",
};

function SigninPage() {
  const { loginUser } = useLogin();

  return (
    <>
      <HeadSection pageDetails={pageDetails} />

      <div className="container my-10 min-h-[calc(100vh-55vh)]">
        <h3 className="text-3xl font-bold text-center text-custom-blue3">
          Sign in to Dnata bd
        </h3>

        <div className="mt-6 flex justify-center">
          <button
            className="px-3 py-2 border border-gray-200 bg-white text-[#7F7F7F] font-bold flex items-center gap-3 rounded-sm shadow"
            onClick={() => loginUser()}
          >
            <Image
              src="/images/logos/google-logo.png"
              alt="google logo"
              width={25}
              height={25}
            />
            <p className="">Continue with Google</p>
          </button>
        </div>
      </div>
    </>
  );
}

export default SigninPage;
