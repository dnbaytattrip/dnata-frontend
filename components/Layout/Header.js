import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Router, { useRouter } from "next/router";
import { MdMenu, MdOutlineKeyboardArrowDown } from "react-icons/md";
import Sidebar from "./Sidebar";
import { navLinks } from "./navLinks";
import useToggle from "../../hooks/useToggle";
import { useSession } from "next-auth/react";
import useLogOut from "../../hooks/useLogOut";

function Header() {
  const { toggle, setToggle, node } = useToggle();
  const {
    toggle: toggleUser,
    setToggle: setToggleUser,
    node: nodeUser,
  } = useToggle();

  const [showSubMenu, setShowSubMenu] = useState("");

  const { data: session, status } = useSession();

  const { logoutUser } = useLogOut();

  const handleLogout = () => {
    logoutUser();
  };

  const router = useRouter();

  Router.events.on("routeChangeStart", (url) => {
    setToggle(false);
    setShowSubMenu("");
  });

  const activeClass = (path) =>
    router.pathname === path ? "text-custom-blue3" : "";

  const activeSubLinkClass = (navLink) => {
    const value = navLink.subLinks.find(
      (subLink) => subLink.link === router.pathname
    );

    if (router.pathname === value?.link) {
      return "text-custom-blue3";
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

  return (
    <>
      <div className="bg-custom-blue">
        <div className="container px-4  flex justify-between items-center">
          <Link href="/">
            <div className="w-[120px] lg:w-[160px] h-full">
              <Image
                src="/images/logos/dnatabd-logo.png"
                alt="dnata logo"
                width={320}
                height={200}
                priority
              />
            </div>
          </Link>

          <button
            className="lg:hidden text-custom-blue2 text-xl p-2"
            aria-label="toggle"
            onClick={() => setToggle(true)}
          >
            <div className="">
              <MdMenu className={!toggle ? "text-3xl" : "hidden"} />
            </div>
          </button>

          <div className="hidden lg:flex justify-between items-center gap-8 text-base text-custom-blue2 font-bold">
            {navLinks.map((navLink, i) => (
              <div key={i} className="">
                {!navLink.subLinks ? (
                  <Link href={navLink.link}>
                    <p
                      className={`hover:text-custom-blue3 transition duration-300 ${activeClass(
                        navLink.link
                      )}`}
                    >
                      {navLink.name}
                    </p>
                  </Link>
                ) : (
                  <div
                    onMouseEnter={() => menu(i)}
                    onMouseLeave={() => menu(null)}
                    // className="relative"
                    className={`relative ${activeSubLinkClass(navLink)}`}
                  >
                    <p
                      className={`cursor-pointer flex items-center gap-1 hover:text-custom-blue3 transition duration-300 ${activeClass(
                        navLink.link
                      )}`}
                    >
                      {navLink.name}
                      <span
                        className={`text-xl ${showSubMenu && "rotate-180"}`}
                      >
                        <MdOutlineKeyboardArrowDown />
                      </span>
                    </p>

                    {showSubMenu === i && (
                      <div className="absolute -left-[100%] z-20 min-w-[280px]">
                        <div className="">
                          <div className="h-5"></div>
                          {/* <div className="h-1"></div> */}
                          {/* <div class="w-0 h-0 border-l-[10px] border-l-transparent border-b-[15px] border-b-cyan-100 border-r-[10px] border-r-transparent"></div> */}
                          <div className="text-custom-blue2  rounded-xl py-5 bg-cyan-100 border border-cyan-300 shadow-md">
                            {navLink.subLinks.map((subLink, i) => (
                              <div
                                key={i}
                                className={`flex flex-col w-full transition duration-200  ${
                                  router.pathname === subLink.link
                                    ? "bg-cyan-300 text-custom-blue3"
                                    : "hover:bg-cyan-200"
                                }`}
                              >
                                <Link href={subLink.link}>
                                  <p className={`py-2 pl-6 `}>{subLink.name}</p>
                                </Link>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}

            {/* <Link href="/contact">
              <button className="px-5 py-2 rounded-full text-white text-xs font-bold bg-custom-blue3 hover:bg-custom-blue2 transition duration-300">
                Contact Us
              </button>
            </Link> */}

            {/* {!session || (session && session?.user.text) ? ( */}
            {!session || (session && session?.user.role === "admin") ? (
              <Link href="/sign-in">
                <button className="px-5 py-2 rounded-full text-white text-xs font-bold bg-cyan-800 hover:bg-cyan-600 transition duration-300">
                  Sign in
                </button>
              </Link>
            ) : (
              // <div className="flex items-center gap-3">
              //   <div className="flex items-center gap-3">
              <div ref={nodeUser} className="relative">
                <button
                  className="active:scale-95"
                  onClick={() => setToggleUser(!toggleUser)}
                >
                  <Image
                    src={session?.user.image}
                    alt="user picture"
                    className="rounded-full"
                    width={33}
                    height={33}
                  />
                </button>

                {toggleUser && (
                  <div className="absolute w-full -left-[230px] z-20">
                    <div className="h-5"></div>
                    <div className="break-all text-custom-blue2 min-w-[270px] max-w-[320px] px-3 py-3  rounded-xl bg-cyan-100 border border-cyan-300 shadow-md">
                      <div className="flex items-center gap-2">
                        <Image
                          src={session.user.image}
                          alt="user picture"
                          className="rounded-full"
                          width={47}
                          height={47}
                        />

                        <div className="">
                          <p className="text-sm font-bold">
                            {session.user.name}
                          </p>
                          <p className="text-xs">{session.user.email}</p>
                        </div>
                      </div>

                      <div className="mt-2 flex justify-center">
                        <button
                          className="px-5 py-2 rounded-full text-white text-xs font-bold bg-cyan-700 hover:bg-cyan-600 transition duration-300"
                          onClick={handleLogout}
                        >
                          Sign out
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              //     <p className="">{session.user.name}</p>
              //   </div>

              // <button
              //   className="px-5 py-2 rounded-full text-white text-xs font-bold bg-red-800 hover:bg-red-600 transition duration-300"
              //   onClick={handleLogout}
              // >
              //   Sign out
              // </button>
              // </div>
            )}
          </div>
        </div>
      </div>

      <Sidebar
        toggle={toggle}
        setToggle={setToggle}
        node={node}
        session={session}
        status={status}
        handleLogout={handleLogout}
      />
    </>
  );
}

export default Header;
