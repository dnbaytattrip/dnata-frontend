import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { MdClose } from "react-icons/md";
import { navLinks } from "./navLinks";

function Sidebar({ toggle, setToggle, node }) {
  const router = useRouter();

  const activeClass = (path) =>
    router.pathname === path ? "text-gray-600" : "";

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
        className={`lg:hidden h-screen bg-custom-blue4 z-30 fixed inset-y-0 right-0 text-white w-[270px] ease-out duration-300 ${
          toggle ? "translate-x-0" : "translate-x-full"
        }
    `}
      >
        <div className="px-5 py-5 flex flex-col gap-2 text-black font-bold">
          <span
            className="text-black text-2xl mt-2 mb-5 mr-1.5 self-end hover:rotate-90 transition duration-300"
            onClick={() => setToggle(false)}
          >
            <MdClose />
          </span>
          {navLinks.map((navLink, i) => (
            <Link key={i} href={navLink.link} passHref>
              <a className={activeClass(navLink.link)}>{navLink.name}</a>
            </Link>
          ))}

          <div className="border-t mt-5 border-gray-500">
            <Link href="/contact" passHref>
              <button className="mt-7 px-5 py-2 rounded-full text-white text-sm font-bold bg-custom-blue3 hover:bg-custom-blue2 transition duration-300">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
