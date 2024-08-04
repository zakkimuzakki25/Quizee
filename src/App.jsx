import { BrowserRouter } from "react-router-dom";
import MainRoute from "./routes/MainRoute";
import { AuthProvider } from "./context/AuthContext";
import { QuizProvider } from "./context/QuizContext";
import { LoadingProvider } from "./context/LoadingContext";

function App() {
  return (
    <BrowserRouter>
      <LoadingProvider>
        <AuthProvider>
          <QuizProvider>
            <MainRoute />
          </QuizProvider>
        </AuthProvider>
      </LoadingProvider>
    </BrowserRouter>
  );
}

export default App;
