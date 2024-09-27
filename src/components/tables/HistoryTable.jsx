import { useEffect, useState } from "react";

const HistoryTable = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchHistory = () => {
      const storedHistory = JSON.parse(localStorage.getItem("quizHistory")) || [];
      setHistory(storedHistory);
    };
    fetchHistory();
  }, []);

  return (
    <div className="flex flex-col w-fit h-full justify-start items-center gap-3 md:overflow-y-auto">
      <h2 className="text-lg md:text-2xl font-semibold text-white">History</h2>
      <table>
        <thead>
          <tr className="flex justify-center md:justify-start gap-1 p-1 md:gap-2.5 md:p-2.5">
            <th className="bg-white rounded-full w-20 md:w-32 h-fit text-xs justify-center items-center flex">User</th>
            <th className="bg-white rounded-full w-32 md:w-44 h-fit text-xs justify-center items-center flex">Correct Answer</th>
            <th className="bg-white rounded-full w-20 md:w-32 h-fit text-xs justify-center items-center flex">Score</th>
          </tr>
        </thead>
        <tbody>
          {history.length === 0 ? (
            <tr className="justify-center flex pt-3">
              <td colSpan="3" className="text-white text-s font-medium">No History Yet</td>
            </tr>
          ) : (
            history.map((item, index) => (
              <tr className="flex gap-2.5 px-2.5" key={index}>
                <td className="text-white font-bold rounded-full w-20 md:w-32 text-s justify-center items-center flex">{item.user}</td>
                <td className="text-white font-bold rounded-full w-32 md:w-44 text-s justify-center items-center flex">{item.correctAnswers}</td>
                <td className="text-white font-bold rounded-full w-20 md:w-32 text-s justify-center items-center flex">{item.score}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default HistoryTable;
