import { useRouter } from "next/router";
import Footer from "./Footer";
import Header from "./Header";
import AdminLayout from "../Admin/Layout";
import { useSession } from "next-auth/react";

function Layout({ children }) {
  const { pathname } = useRouter();
  const { data: session } = useSession();

  // console.log("session is", session);

  if (pathname.includes("/admin") || pathname.includes("/dashboard"))
    return <AdminLayout>{children}</AdminLayout>;

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
