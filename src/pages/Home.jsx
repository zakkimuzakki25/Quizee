import Navbar from "../components/navigations/Navbar";
import icon from "../../public/logo.png";
import StartButton from "../components/buttons/StartButton";
import HistoryTable from "../components/tables/HistoryTable";

const Home = () => {
  return (
    <div className="flex flex-col bg-primer2 w-screen h-screen overflow-auto md:overflow-hidden">
      <Navbar />
      <div className="flex flex-row w-full h-full justify-center items-center px-0 md:px-24 pt-28 md:pt-88">
        <div className="flex-col hidden md:flex w-fit h-full shrink-0 justify-center items-center">
          <img src={icon} className="w-450 h-450" alt="Logo" />
          <p style={{ lineHeight: "1" }} className="font-bold text-8xl text-white font-reem drop-shadow-xBlack -translate-y-16">
            Quizee
          </p>
        </div>
        <div className="flex flex-col w-full h-full">
          {/* button start */}
          <div className="flex flex-col gap-7 justify-end w-full h-full px-5 md:px-0">
            <div className="flex flex-col text-white text-center drop-shadow-xBlack gap-1 md:gap-0">
              <p className="text-3xl md:text-4xl font-bold">Welcome To Quizee</p>
              <p className="text-sm md:text-lg">Are you ready to test your knowledge and have some fun?</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <p className="text-sm md:text-lg text-white text-center drop-shadow-xBlack">Let the quizzing begin!</p>
              <StartButton />
            </div>
          </div>

          {/* table history */}
          <div className="flex flex-col justify-start items-center w-full h-full py-9 md:overflow-hidden">
            <HistoryTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
