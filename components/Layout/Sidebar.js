import { useEffect, useState } from "react";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import { MdClose, MdOutlineKeyboardArrowDown } from "react-icons/md";
import { navLinks } from "./navLinks";
import Image from "next/image";

function Sidebar({ toggle, setToggle, node, session, status, handleLogout }) {
  const [showSubMenu, setShowSubMenu] = useState("");
  const router = useRouter();

  // Router.events.on("routeChangeStart", (url) => {
  //   setShowSubMenu("");
  // });

  const activeClass = (path) =>
    router.pathname === path ? "text-gray-600 bg-cyan-200" : "";

  const activeSubLinkClass = (navLink) => {
    const value = navLink.subLinks.find(
      (subLink) => subLink.link === router.pathname
    );

    if (router.pathname === value?.link && !showSubMenu) {
      return "bg-cyan-200 text-custom-blue3";
    } else {
      return "";
    }
  };

  const menu = (index) => {
    if (showSubMenu === index) {
      return setShowSubMenu(null);
    }
    setShowSubMenu(index);
  };

  useEffect(() => {
    if (toggle) {
      document.body.classList.add("overflow-y-hidden");
    }

    return () => document.body.classList.remove("overflow-y-hidden");
  }, [toggle]);

  return (
    <div
      className={
        toggle
          ? "fixed inset-0 bg-black/50 backdrop-blur-sm z-30 lg:bg-transparent"
          : ""
      }
    >
      <div
        ref={node}
        className={`overflow-y-auto lg:hidden h-screen bg-custom-blue4 z-30 fixed inset-y-0 right-0 text-white w-[270px] ease-out duration-300 ${
          toggle ? "translate-x-0" : "translate-x-full"
        }
    `}
      >
        <div className="px-2 py-5 mb-20 flex flex-col text-black font-bold">
          <span
            className="text-black text-2xl mt-2 mb-5 mr-1.5 self-end hover:rotate-90 transition duration-300"
            onClick={() => setToggle(false)}
          >
            <MdClose />
          </span>
          {navLinks.map((navLink, i) => (
            <div key={i} className="">
              {!navLink.subLinks ? (
                <Link href={navLink.link}>
                  <p
                    key={i}
                    className={`py-2 pl-5 rounded-lg  ${
                      router.pathname === navLink.link
                        ? "bg-cyan-200 text-custom-blue3"
                        : "hover:bg-cyan-100"
                    }`}
                  >
                    {navLink.name}
                  </p>
                </Link>
              ) : (
                <div
                  onClick={() => menu(i)}
                  // className="relative"
                  className={`rounded-lg ${activeSubLinkClass(navLink)}`}
                >
                  <p
                    className={`px-5 py-2 cursor-pointer flex items-center gap-1 hover:text-custom-blue3 transition duration-300 ${activeClass(
                      navLink.link
                    )}`}
                  >
                    {navLink.name}
                    <span className={`text-xl ${showSubMenu && "rotate-180"}`}>
                      <MdOutlineKeyboardArrowDown />
                    </span>
                  </p>
                </div>
              )}
              {showSubMenu === i && (
                <div className="py-2">
                  {navLink.subLinks.map((subLink, i) => (
                    <Link key={i} href={subLink.link}>
                      <p
                        className={`py-2 pl-8  rounded-lg ${
                          router.pathname === subLink.link
                            ? "bg-cyan-200 text-custom-blue3"
                            : "hover:bg-cyan-100"
                        }`}
                      >
                        {subLink.name}
                      </p>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <div className="border-t mt-5 px-2 border-gray-500">
            <div className="mt-5">
              {/* <Link href="/contact">
                <button className="px-5 py-2 rounded-full text-white text-sm font-bold bg-custom-blue3 hover:bg-custom-blue2 transition duration-300">
                  Contact Us
                </button>
              </Link> */}

              {/* {!session || (session && session?.user.text) ? ( */}
              {!session || (session && session?.user.role === "admin") ? (
                <Link href="/sign-in">
                  <button className="px-5 py-2 rounded-full text-white text-sm font-bold bg-cyan-800 hover:bg-cyan-600 transition duration-300">
                    Sign in
                  </button>
                </Link>
              ) : (
                <div className="break-all text-custom-blue2 p-2.5 bg-cyan-200 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Image
                      src={session?.user.image}
                      alt="user picture"
                      className="rounded-full"
                      width={47}
                      height={47}
                    />

                    <div className="">
                      <p className="text-sm font-bold">{session.user.name}</p>
                      <p className="text-xs">{session.user.email}</p>
                    </div>
                  </div>

                  <div className="mt-3 flex justify-center">
                    <button
                      className="px-5 py-2 rounded-full text-white text-xs font-bold bg-cyan-700 hover:bg-cyan-600 transition duration-300"
                      onClick={handleLogout}
                    >
                      Sign out
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
