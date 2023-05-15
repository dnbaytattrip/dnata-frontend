import { FaAngleDown, FaAngleUp, FaBars, FaUserCircle } from "react-icons/fa";

import useToggle from "../../../../hooks/useToggle";
import Link from "next/link";
import { useSession } from "next-auth/react";
import useAdminLogout from "../../../../hooks/useAdminLogout";

function Header({ showMenu, setShowMenu }) {
  const { toggle, setToggle, node } = useToggle();

  const { logoutAdmin } = useAdminLogout();

  const handleLogout = () => {
    logoutAdmin();
  };

  return (
    <div className="sticky top-0 z-20">
      <div className="relative z-20">
        <div className="bg-white h-[68px] w-full flex justify-between lg:justify-end items-center shadow-md  px-7 z-30">
          <div
            className="text-custom-blue2 lg:hidden"
            onClick={() => setShowMenu(!showMenu)}
          >
            <FaBars size={20} />
          </div>

          <div className="text-xl text-custom-blue6 font-bold lg:hidden">
            Dnata Bd
          </div>

          <div className="flex justify-between items-center gap-5 lg:gap-[70px]">
            <div className="hidden lg:block">
              <Link href="/">
                <button className="font-semibold px-3 py-1.5 hover:bg-custom-blue rounded">
                  Go to site
                </button>
              </Link>
            </div>

            <div className="hidden lg:flex items-center gap-10">
              <p className="font-semibold">Signed in as Admin</p>

              <button
                className="hidden lg:block bg-custom-blue6 hover:bg-opacity-80 active:scale-95 text-sm text-white font-semibold px-2 py-1 lg:px-4 lg:py-2 rounded-md transition duration-200"
                onClick={handleLogout}
              >
                Sign out
              </button>
            </div>
          </div>

          <div
            className="lg:hidden text-custom-blue2 p-1 rounded-full border-2 border-custom-blue2"
            onClick={() => setToggle(!toggle)}
          >
            {toggle ? <FaAngleUp size={20} /> : <FaAngleDown size={20} />}
          </div>
        </div>
      </div>
      <div
        ref={node}
        className={`lg:hidden flex flex-col items-center bg-custom-blue6 absolute top-[68px] w-full py-7 text-sm text-white font-semibold shadow-md ease-out duration-300 z-10
            ${toggle ? "translate-y-0" : "-translate-y-full shadow-none"}`}
      >
        <Link href="/">
          <button className="font-semibold px-3 py-1.5 hover:bg-custom-blue5 rounded">
            Go to site
          </button>
        </Link>

        <p className="mt-4 py-3">Signed in as Admin</p>

        <button
          type="button"
          className="mt-2 px-5 py-3 bg-custom-blue5 hover:bg-custom-blue3 hover:bg-opacity-80 text-sm font-semibold rounded-lg active:scale-95 transition duration-200"
          onClick={handleLogout}
        >
          Sign out
        </button>
      </div>
    </div>
  );
}

export default Header;
