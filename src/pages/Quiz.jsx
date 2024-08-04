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
    return null; // Prevent rendering before user is authenticated, questions are loaded, or quiz has started
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

      <div className="flex flex-col w-full h-full justify-center items-center px-24 pt-88">
        {/* header */}
        <div className="flex flex-row w-full h-fit shrink-0 justify-between items-center text-white px-12 py-6 border-b-4 border-white">
          <div className="text-2xl flex gap-1.5 justify-center items-center font-inter font-semibold">
            <span className="text-5xl">{currentQuestionIndex + 1}</span>/{" "}
            {questions.length}
          </div>
          <div className="flex flex-row justify-center items-center gap-1.5">
            <img src={iconTimer} alt="Timer" />
            <p className="font-medium text-3xl">{formatTime(timer)}</p>
          </div>
        </div>

        {/* soal */}
        <div className="flex flex-col w-full h-full">
          {/* question */}
          <div className="h-full w-full pt-14">
            <p className="font-inter font-semibold text-4xl text-white text-center">
              {decodeHtmlEntities(currentQuestion.question)}
            </p>
          </div>
          {/* options */}
          <div className="h-full w-full flex flex-row justify-center gap-8">
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
