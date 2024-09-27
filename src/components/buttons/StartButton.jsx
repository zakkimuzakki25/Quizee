import { useContext } from "react";
import { QuizContext } from "../../context/QuizContext";
import { AuthContext } from "../../context/AuthContext";

const StartButton = () => {
  const { startQuiz } = useContext(QuizContext);
  const { user } = useContext(AuthContext);

  const savedQuiz = user ? JSON.parse(localStorage.getItem("quizState" + user)) : null;

  return (
    <button
      onClick={startQuiz}
      className='w-64 md:w-350 h-fit text-lg md:text-2xl font-bold text-black bg-white py-4 md:py-6 flex justify-center border-4 border-primer border-opacity-50 rounded-2xl drop-shadow-xBlack hover:scale-105 transition-all'>
      {savedQuiz && savedQuiz.isQuizStarted ? "Continue Quiz" : "Start Quiz"}
    </button>
  );
};

export default StartButton;
