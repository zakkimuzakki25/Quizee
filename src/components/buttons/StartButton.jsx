import { useContext } from "react";
import { QuizContext } from "../../context/QuizContext";

const StartButton = () => {
  const { startQuiz } = useContext(QuizContext);

  const savedQuiz = JSON.parse(localStorage.getItem("quizState"));

  return (
    <button
      onClick={startQuiz}
      className='w-350 h-fit text-2xl font-bold text-black bg-white py-6 flex justify-center border-4 border-primer border-opacity-50 rounded-2xl drop-shadow-xBlack'>
      {savedQuiz && savedQuiz.isQuizStarted ? "Continue Quiz" : "Start Quiz"}
    </button>
  );
};

export default StartButton;
