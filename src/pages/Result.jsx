import { useLocation, useNavigate } from "react-router-dom";
import PrimerButton from "../components/buttons/PrimerButton";
import Navbar from "../components/navigations/Navbar";
import iconTimer from "/timer.svg";
import { useContext, useEffect } from "react";
import { QuizContext } from "../context/QuizContext";
import resultSound from "../../public/audio/result.mp3";

const Result = () => {
  const nav = useNavigate();
  const location = useLocation();
  const {
    answeredQuestions = 0,
    correctAnswers = 0,
    total = 0,
    score = 0,
  } = location.state || {};

  const { startQuiz } = useContext(QuizContext);

  const tryAgainHandle = () => {
    startQuiz();
  };

  useEffect(() => {
    const congratsSound = new Audio(resultSound);
    congratsSound.play();
  }, []);

  return (
    <div className="flex flex-col bg-primer2 w-screen h-screen">
      <Navbar />

      <div className="flex flex-col w-full h-full justify-center items-center px-8 md:px-24 pt-14 md:pt-88">
        {/* header */}
        <div className="flex flex-row w-full h-fit shrink-0 justify-between items-center text-white px-2 md:px-12 py-3 md:py-6 border-b-4 md:border-b-4 border-white">
          <div className="text-lg md:text-2xl flex gap-1.5 justify-center items-center font-inter font-semibold">
            <span className="text-3xl md:text-5xl">{answeredQuestions}</span>/ {total} Answered
          </div>
          <div className="flex flex-row justify-center items-center gap-1 md:gap-1.5">
            <img src={iconTimer} alt="Timer" className="w-7 md:w-10" />
            <p className="font-medium text-xl md:text-3xl">Finished</p>
          </div>
        </div>

        {/* result */}
        <div className="flex flex-col w-full h-full justify-center gap-1 md:gap-3">
          <p className="font-inter font-semibold text-2xl md:text-4xl text-white text-center">
            You answered {correctAnswers} correctly!
          </p>
          <p className="font-inter font-semibold text-2xl md:text-4xl text-white text-center">
            {answeredQuestions - correctAnswers} Wrong!
          </p>
          <p className="font-medium text-xl md:text-3xl text-white text-center">
            Score: {score}
          </p>
        </div>

        <div className="flex flex-col gap-4 items-center md:flex-row w-full h-fit justify-between pb-20 md:py-14 md:px-20">
          <div className="w-52">
            <PrimerButton
              text={"Back Home"}
              handle={() => (nav('/'))}
            />
          </div>
          <div className="w-52">
            <PrimerButton text={"Try Again"} handle={tryAgainHandle} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
