import { useRouter } from "next/router";
import Footer from "./Footer";
import Header from "./Header";

function Layout({ children }) {
  const { pathname } = useRouter();

  if (pathname.includes("/admin") || pathname.includes("/dashboard"))
    return <>{children}</>;

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
