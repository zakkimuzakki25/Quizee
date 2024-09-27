import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";
import { LoadingContext } from "./LoadingContext";

export const QuizContext = createContext();

// eslint-disable-next-line react/prop-types
export const QuizProvider = ({ children }) => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timer, setTimer] = useState(15);
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  const [correct, setCorrect] = useState(0);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState(0);

  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const { setIsLoading } = useContext(LoadingContext);

  useEffect(() => {
  }, [timer]);

  useEffect(() => {
    resetQuiz();
    if (user) {
      const savedQuiz = JSON.parse(localStorage.getItem("quizState" + user));
      if (savedQuiz && savedQuiz.isQuizStarted) {
        startQuiz();
      }
    }
  }, [user]);

  useEffect(() => {
    let interval;
    if (isQuizStarted) {
      interval = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer <= 1) {
            clearInterval(interval);
            nextQuestion(false, false);
            return 15;
          }
          return prevTimer - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isQuizStarted, currentQuestionIndex]);

  useEffect(() => {
    if (isQuizStarted && user) {
      localStorage.setItem(
        "quizState" + user,
        JSON.stringify({
          questions,
          currentQuestionIndex,
          timer,
          isQuizStarted,
          score,
          correct,
          answeredQuestions,
        })
      );
    }
  }, [questions, currentQuestionIndex, timer, isQuizStarted, score, correct, answeredQuestions]);

  const startQuiz = async () => {
    if (user) {
      const savedQuiz = JSON.parse(localStorage.getItem("quizState" + user));
      if (savedQuiz && savedQuiz.isQuizStarted) {
        setQuestions(savedQuiz.questions);
        setCurrentQuestionIndex(savedQuiz.currentQuestionIndex);
        setTimer(savedQuiz.timer);
        setIsQuizStarted(true);
        setScore(savedQuiz.score);
        setCorrect(savedQuiz.correct);
        setAnsweredQuestions(savedQuiz.answeredQuestions);
      } else {
        try {
          setIsLoading(true);
          const response = await axios.get(
            "https://opentdb.com/api.php?amount=10"
          );
          setQuestions(response.data.results);
          setIsQuizStarted(true);
          setTimer(15);
          setScore(0);
          setCurrentQuestionIndex(0);
          setCorrect(0);
          setAnsweredQuestions(0);
        } catch (error) {
          console.error("Error fetching questions:", error);
        } finally {
          setIsLoading(false);
        }
      }
      navigate("/quiz");
    } else {
      navigate("/login");
    }
  };

  const nextQuestion = (isCorrect, isAnswered) => {
    if (isCorrect) {
      setScore((prevScore) => prevScore + timer);
      setCorrect((prevCorrect) => prevCorrect + 1);
    }
    if (isAnswered) {
      setAnsweredQuestions((prevAnsweredQuestions) => prevAnsweredQuestions + 1);
    }
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setTimer(15);
    } else {
      const finalScore = score + (isCorrect ? timer : 0);
      const finalansweredQuestions = answeredQuestions + 1;
      const existingHistory = JSON.parse(localStorage.getItem("quizHistory")) || [];
      const newHistoryEntry = {
        user,
        correctAnswers: correct,
        score: finalScore,
        answeredQuestions: finalansweredQuestions,
      };
      existingHistory.push(newHistoryEntry);
      localStorage.setItem("quizHistory", JSON.stringify(existingHistory));
      localStorage.removeItem("quizState" + user);

      navigate("/result", {
        state: {
          answeredQuestions: finalansweredQuestions,
          correctAnswers: correct,
          total: questions.length,
          score: finalScore,
        },
      });

      resetQuiz();
    }
  };

  const resetQuiz = () => {
    setQuestions([]);
    setCurrentQuestionIndex(0);
    setTimer(15);
    setIsQuizStarted(false);
    setCorrect(0);
    setScore(0);
    setAnsweredQuestions(0);
  };

  return (
    <QuizContext.Provider
      value={{
        questions,
        currentQuestionIndex,
        timer,
        isQuizStarted,
        startQuiz,
        nextQuestion,
        score,
        correct,
        answeredQuestions,
        resetQuiz,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};
