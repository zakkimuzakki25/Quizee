import { Route, Routes } from "react-router-dom";
import Protected from "./Protected";
import Auth from "./Auth";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Quiz from "../pages/Quiz";
import Result from "../pages/Result";
import Loading from "../components/handling/Loading";
import { useContext } from "react";
import { LoadingContext } from "../context/LoadingContext";

const MainRoute = () => {
  const { isLoading } = useContext(LoadingContext);

  return (
    <>
      {isLoading && <Loading />}
      <Routes>
        {/* general */}
        <Route path="/" element={<Home />} />

        {/* auth */}
        <Route element={<Auth />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        {/* protected */}
        <Route element={<Protected />}>
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/result" element={<Result />} />
        </Route>
      </Routes>
    </>
  );
};

export default MainRoute;
