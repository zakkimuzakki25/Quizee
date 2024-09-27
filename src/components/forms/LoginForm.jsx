import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import PrimerButton from "../buttons/PrimerButton";
import Input from "../inputs/Input";

const LoginForm = () => {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password, setMessage);
  };

  return (
    <div className="flex flex-col w-72 md:w-450 justify-center items-center gap-5 md:gap-4 px-9 md:px-12 pt-7 pb-11 drop-shadow-xBlack bg-white rounded-3xl">
      <h1 className="font-secularOne text-2xl md:text-3xl font-semibold text-primer">
        LOG IN
      </h1>
      <form onSubmit={handleSubmit} className="w-full gap-3 flex flex-col">
        <div className="flex flex-col gap-3">
          <Input
            type="text"
            placeholder="Enter your username here"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            label="Username"
          />
          <Input
            type="password"
            placeholder="Enter your password here"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            label="Password"
          />
        </div>
        <p className="text-red-500 text-base">{message}</p>
        <PrimerButton text={"Log In"} />
      </form>
    </div>
  );
};

export default LoginForm;
