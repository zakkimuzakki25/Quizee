import { Link } from "react-router-dom";
import logoutIcon from "/icon/logout.svg";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const user = window.localStorage.getItem("user");

  const { logout } = useContext(AuthContext);

  return (
    <div
      className={`navbar bg-white transition-all flex py-3 px-6 md:px-14 md:py-7 w-full h-fit md:h-88 z-40 shadow-default fixed top-0`}
    >
      <div className="flex w-full justify-between">
        <Link
          to={"/"}
          className="flex items-center hover:scale-105 transition-all font-semibold text-base md:text-2xl text-black"
        >
          HOME
        </Link>

        <div className="flex flex-row gap-6">
          {user ? (
            <div className="flex flex-row gap-4 md:gap-6 items-center">
              <h2 className="flex items-center box-border font-semibold text-sm md:text-xl text-black font-inter">Hi {user}!</h2>

              <div className="w-0.5 h-full bg-primer2"></div>

              <button onClick={logout}>
                <img src={logoutIcon} className="hover:scale-110 w-5 md:w-7"/>
              </button>
            </div>
          ) : (
            <>
              <div className="flex flex-row gap-3 md:gap-6 items-center text-sm md:text-xl">
                <Link
                  to="/login"
                  className={`flex hover:scale-110 items-center box-border transition-all duration-150 bg-none font-semibold text-black`}
                >
                  <h3>Log In</h3>
                </Link>

                <div className="w-0.5 md:w-1 h-full bg-primer2"></div>

                <Link
                  to="/register"
                  className={`flex hover:scale-110 items-center box-border transition-all duration-150 bg-none font-semibold text-black`}
                >
                  <h3>Sign Up</h3>
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
