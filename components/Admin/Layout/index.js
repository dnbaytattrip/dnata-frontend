import Header from "./Header";
import Sidebar from "./Sidebar";
import { Router, useRouter } from "next/router";
// import { useSession } from "next-auth/react";
import { dashboardLinks } from "./Sidebar/navlinks/dashboardLinks";
import useToggle from "../../../hooks/useToggle";

function AdminLayout({ children }) {
  const { toggle: showMenu, setToggle: setShowMenu, node } = useToggle();

  Router.events.on("routeChangeStart", (url) => {
    setShowMenu(false);
  });

  const { pathname } = useRouter();

  if (pathname === "/admin/sign-in") {
    return <>{children}</>;
  }

  // if (!data) {
  //   return <>{children}</>;
  // }

  return (
    <>
      <div className="lg:flex">
        <Sidebar
          showMenu={showMenu}
          setShowMenu={setShowMenu}
          node={node}
          navLinks={dashboardLinks}
        />

        <div className="lg:flex-1">
          <Header showMenu={showMenu} setShowMenu={setShowMenu} />

          <div className="py-5 px-2 lg:px-5">{children}</div>
        </div>
      </div>
    </>
  );
}

export default AdminLayout;
