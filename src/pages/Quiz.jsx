import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Option from "../components/buttons/Option";
import Navbar from "../components/navigations/Navbar";
import iconTimer from "/timer.svg";
import { QuizContext } from "../context/QuizContext";
import { AuthContext } from "../context/AuthContext";

const Quiz = () => {
  const {
    questions,
    currentQuestionIndex,
    timer,
    nextQuestion,
    isQuizStarted,
  } = useContext(QuizContext);

  const { user } = useContext(AuthContext);

  const navigate = useNavigate();
  const [shuffledAnswers, setShuffledAnswers] = useState([]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}m ${remainingSeconds}s`;
  };

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  useEffect(() => {
    if (isQuizStarted && currentQuestionIndex >= questions.length) {
      navigate("/result", { state: { score: 0, total: questions.length } });
    }
  }, [currentQuestionIndex, questions.length, navigate, isQuizStarted]);

  useEffect(() => {
    if (questions.length && isQuizStarted) {
      const currentQuestion = questions[currentQuestionIndex];
      const shuffleArray = (array) => {
        return array.sort(() => Math.random() - 0.5);
      };
      setShuffledAnswers(
        shuffleArray(
          currentQuestion.incorrect_answers.concat(currentQuestion.correct_answer)
        )
      );
    }
  }, [currentQuestionIndex, questions, isQuizStarted]);

  if (!user || !questions.length || !isQuizStarted) {
    return null;
  }

  const currentQuestion = questions[currentQuestionIndex];

  const decodeHtmlEntities = (str) => {
    const textarea = document.createElement("textarea");
    textarea.innerHTML = str;
    return textarea.value;
  };

  return (
    <div className="flex flex-col bg-primer2 w-screen h-screen">
      <Navbar />

      <div className="flex flex-col w-full h-full justify-center items-center px-8 md:px-24 pt-14 md:pt-88">
        {/* header */}
        <div className="flex flex-row w-full h-fit shrink-0 justify-between items-center text-white px-6 md:px-12 py-3 md:py-6 border-b-4 md:border-b-4 border-white">
          <div className="text-lg md:text-2xl flex gap-1.5 justify-center items-center font-inter font-semibold">
            <span className="text-3xl md:text-5xl">{currentQuestionIndex + 1}</span>/{" "}
            {questions.length}
          </div>
          <div className="flex flex-row justify-center items-center gap-1 md:gap-1.5">
            <img src={iconTimer} alt="Timer" className="w-7 md:w-10" />
            <p className="font-medium text-xl md:text-3xl">{formatTime(timer)}</p>
          </div>
        </div>

        {/* soal */}
        <div className="flex flex-col w-full h-full">
          {/* question */}
          <div className="flex justify-center items-center h-full md:h-full w-full pt-6 md:pt-14">
            <p className="font-inter font-semibold text-2xl md:text-4xl text-white text-center">
              {decodeHtmlEntities(currentQuestion.question)}
            </p>
          </div>
          {/* options */}
          <div className="h-full w-full flex flex-col pb-14 md:pb-0 md:flex-row justify-end items-center md:items-center md:justify-center gap-4 md:gap-8">
            {shuffledAnswers.map((answer, index) => (
              <Option
                key={index}
                text={decodeHtmlEntities(answer)}
                handle={() =>
                  nextQuestion(answer === currentQuestion.correct_answer, true)
                }
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
