import { useLocation } from "react-router-dom";
import PrimerButton from "../components/buttons/PrimerButton";
import Navbar from "../components/navigations/Navbar";
import iconTimer from "/timer.svg";
import { useContext } from "react";
import { QuizContext } from "../context/QuizContext";

const Result = () => {
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

  return (
    <div className="flex flex-col bg-primer2 w-screen h-screen">
      <Navbar />

      <div className="flex flex-col w-full h-full justify-center items-center px-24 pt-88">
        {/* header */}
        <div className="flex flex-row w-full h-fit shrink-0 justify-between items-center text-white px-12 py-6 border-b-4 border-white">
          <div className="text-2xl flex gap-1.5 justify-center items-center font-inter font-semibold">
            <span className="text-5xl">{answeredQuestions}</span>/ {total} Answered
          </div>
          <div className="flex flex-row justify-center items-center gap-1.5">
            <img src={iconTimer} alt="Timer" />
            <p className="font-medium text-3xl">Finished</p>
          </div>
        </div>

        {/* result */}
        <div className="flex flex-col w-full h-full justify-center gap-3">
          <p className="font-inter font-semibold text-4xl text-white text-center">
            You answered {correctAnswers} correctly!
          </p>
          <p className="font-inter font-semibold text-4xl text-white text-center">
            {answeredQuestions - correctAnswers} Wrong!
          </p>
          <p className="font-medium text-3xl text-white text-center">
            Score: {score}
          </p>
        </div>

        <div className="flex flex-row w-full h-fit justify-between py-14 px-20">
          <div className="w-40">
            <PrimerButton
              text={"Back Home"}
              handle={() => (window.location.href = "/")}
            />
          </div>
          <div className="w-40">
            <PrimerButton text={"Try Again"} handle={tryAgainHandle} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
