import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import PrimerButton from "../buttons/PrimerButton";

const LoginForm = () => {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password, setMessage);
  };

  return (
    <div className="flex flex-col w-450 justify-center items-center gap-4 px-12 pt-7 pb-11 drop-shadow-xBlack bg-white rounded-3xl">
      <h1 className="font-secularOne text-3xl font-semibold text-primer">LOG IN</h1>
      <form onSubmit={handleSubmit} className="w-full gap-3 flex flex-col">
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-1.5">
            <label className="font-secularOne text-lg font-semibold">
              Username
            </label>
            <input
              type="text"
              placeholder="Enter your username here"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="bg-primer bg-opacity-50 rounded-lg px-4 py-2 text-s placeholder:text-white placeholder:text-opacity-75 text-white font-semibold border-2 border-primer border-opacity-50 focus:outline-none"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="font-secularOne text-lg font-semibold">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password here"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="bg-primer bg-opacity-50 rounded-lg px-4 py-2 text-s placeholder:text-white placeholder:text-opacity-75 text-white font-semibold border-2 border-primer border-opacity-50 focus:outline-none"
            />
          </div>
        </div>
        <p className="text-red-500 text-base">{message}</p>
        <PrimerButton text={"Log In"}/>
      </form>
    </div>
  );
};

export default LoginForm;
