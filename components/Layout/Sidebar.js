import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { MdClose } from "react-icons/md";
import { motion } from "framer-motion";

function Dropdown({ isOpen, toggleOpen }) {
  const slide = {
    initial: {
      x: "90vw",
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
    },
  };

  const router = useRouter();

  const activeClass = (path) =>
    router.pathname === path ? "text-gray-600" : "";

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("active-sidebar");
    } else {
      document.body.classList.remove("active-sidebar");
    }
  }, [isOpen]);

  return (
    <motion.div
      className="lg:hidden fixed overflow-y-scroll right-0 left-14 inset-y-0 bg-custom-blue4 z-10"
      variants={slide}
      initial={false}
      animate={isOpen ? "animate" : "initial"}
      transition={{ duration: 0.3 }}
    >
      <div className="px-5 py-5 flex flex-col gap-2 text-black font-bold">
        <span
          className="text-black text-2xl mt-2 mb-5 mr-1.5 self-end hover:rotate-90 transition duration-300"
          onClick={() => toggleOpen()}
        >
          <MdClose />
        </span>
        <Link href="/flight" passHref>
          <a className={activeClass("/flight")}>Flight</a>
        </Link>
        <Link href="/hotel" passHref>
          <a className={activeClass("/hotel")}>Hotel</a>
        </Link>
        <Link href="/visa" passHref>
          <a className={activeClass("/visa")}>Visa</a>
        </Link>
        <Link href="/holiday" passHref>
          <a className={activeClass("/holiday")}>Holiday</a>
        </Link>
        <Link href="/shipping" passHref>
          <a className={activeClass("/shipping")}>Shipping</a>
        </Link>
        <Link href="/export-import" passHref>
          <a className={activeClass("/export-import")}>Export/Import</a>
        </Link>
        <Link href="/about-us" passHref>
          <a className={activeClass("/about-us")}>About Us</a>
        </Link>

        <div className="border-t mt-5 border-gray-500">
          <Link href="/contact" passHref>
            <button className="mt-7 px-5 py-2 rounded-full text-white text-sm font-bold bg-custom-blue3 hover:bg-custom-blue2 transition duration-300">
              Contact
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default Dropdown;
