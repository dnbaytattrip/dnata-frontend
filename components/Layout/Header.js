import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { MdClose, MdMenu } from "react-icons/md";
import { motion, useCycle } from "framer-motion";
import Sidebar from "./Sidebar";

function Header() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const router = useRouter();

  const button = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
  };

  const activeClass = (path) =>
    router.pathname === path ? "text-custom-blue3" : "";

  return (
    <div>
      <div className="bg-custom-blue">
        <div className="container px-4  flex justify-between items-center">
          <Link href="/" passHref>
            <div className="w-[120px] lg:w-[160px] h-full">
              <Image
                src="/images/logos/dnata-logo.png"
                alt="dnata logo"
                width={320}
                height={200}
              />
            </div>
          </Link>

          <button
            className="lg:hidden text-custom-blue2 text-xl p-2"
            aria-label="toggle"
            onClick={() => toggleOpen()}
          >
            <motion.div
              variants={button}
              animate={isOpen ? "initial" : "animate"}
              transition={{ duration: 0.5 }}
            >
              <MdMenu className={!isOpen ? "block text-3xl" : "hidden"} />
            </motion.div>
            {/* <motion.div
              variants={button}
              animate={isOpen ? "animate" : "initial"}
              transition={{ duration: 0.5 }}
            >
              <MdClose className={isOpen ? "block text-3xl" : "hidden"} />
            </motion.div> */}
          </button>

          <div className="hidden lg:flex justify-between items-center gap-8 text-base text-custom-blue2 font-bold">
            <Link href="/flight" passHref>
              <a
                className={`hover:text-custom-blue3 transition duration-300 ${activeClass(
                  "/flight"
                )}`}
              >
                Flight
              </a>
            </Link>
            <Link href="/hotel" passHref>
              <a
                className={`hover:text-custom-blue3 transition duration-300 ${activeClass(
                  "/hotel"
                )}`}
              >
                Hotel
              </a>
            </Link>
            <Link href="/visa" passHref>
              <a
                className={`hover:text-custom-blue3 transition duration-300 ${activeClass(
                  "/visa"
                )}`}
              >
                Visa
              </a>
            </Link>
            <Link href="/holiday" passHref>
              <a
                className={`hover:text-custom-blue3 transition duration-300 ${activeClass(
                  "/holiday"
                )}`}
              >
                Holiday
              </a>
            </Link>
            <Link href="/shipping" passHref>
              <a
                className={`hover:text-custom-blue3 transition duration-300 ${activeClass(
                  "/shipping"
                )}`}
              >
                Shipping
              </a>
            </Link>
            <Link href="/export-import" passHref>
              <a
                className={`hover:text-custom-blue3 transition duration-300 ${activeClass(
                  "/export-import"
                )}`}
              >
                Export/Import
              </a>
            </Link>
            <Link href="/about-us" passHref>
              <a
                className={`hover:text-custom-blue3 transition duration-300 ${activeClass(
                  "/about-us"
                )}`}
              >
                About Us
              </a>
            </Link>
            <Link href="/contact" passHref>
              <button className="px-5 py-2 rounded-full text-white text-xs font-bold bg-custom-blue3 hover:bg-custom-blue2 transition duration-300">
                Contact
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Sidebar isOpen={isOpen} toggleOpen={toggleOpen} />
    </div>
  );
}

export default Header;
