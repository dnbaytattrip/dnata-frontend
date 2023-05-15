import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";

function useAdminLogout() {
  const { data } = useSession();
  const router = useRouter();

  const logoutAdmin = () => {
    signOut({
      callbackUrl: `${window.location.origin}/admin/sign-in`,
      // redirect: false,
    });
  };

  return { logoutAdmin };
}

export default useAdminLogout;
