import Navbar from "../components/navigations/Navbar";
import icon from "../../public/logo.png";

// eslint-disable-next-line react/prop-types
const AuthLayout = ({ children }) => {
  return (
    <div className="flex flex-col bg-primer2 w-screen h-screen">
      <Navbar />
      <div className="flex flex-row w-full h-full justify-center items-center px-24 pt-88">
        <div className="hidden md:flex flex-col w-fit h-full shrink-0 justify-center items-center">
          <img src={icon} className="w-450 h-450" />
          <p
            style={{ lineHeight: "1" }}
            className="font-bold text-8xl text-white font-reem drop-shadow-xBlack -translate-y-16"
          >
            Quizee
          </p>
        </div>
        <div className="flex flex-col w-full h-full justify-center items-center">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
