import Link from "next/link";
import Router, { useRouter } from "next/router";
import Image from "next/image";
import { MdMenu } from "react-icons/md";
import Sidebar from "./Sidebar";
import { navLinks } from "./navLinks";
import useToggle from "../../hooks/useToggle";

function Header() {
  const { toggle, setToggle, node } = useToggle();

  const router = useRouter();

  Router.events.on("routeChangeStart", (url) => {
    setToggle(false);
  });

  const activeClass = (path) =>
    router.pathname === path ? "text-custom-blue3" : "";

  return (
    <>
      <div className="bg-custom-blue">
        <div className="container px-4  flex justify-between items-center">
          <Link href="/" passHref>
            <a>
              <div className="w-[120px] lg:w-[160px] h-full">
                <Image
                  src="/images/logos/dnata-logo.png"
                  alt="dnata logo"
                  width={320}
                  height={200}
                  priority
                />
              </div>
            </a>
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
              <Link key={i} href={navLink.link} passHref>
                <a
                  className={`hover:text-custom-blue3 transition duration-300 ${activeClass(
                    navLink.link
                  )}`}
                >
                  {navLink.name}
                </a>
              </Link>
            ))}

            <Link href="/contact" passHref>
              <button className="px-5 py-2 rounded-full text-white text-xs font-bold bg-custom-blue3 hover:bg-custom-blue2 transition duration-300">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Sidebar toggle={toggle} setToggle={setToggle} node={node} />
    </>
  );
}

export default Header;
