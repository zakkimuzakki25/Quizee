import { createContext, useState } from 'react';
import { useNavigate } from 'react-router';

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const nav = useNavigate();

  const [user, setUser] = useState(() => {
    return window.localStorage.getItem('user');
  });

  const login = (username, password, setMessage) => {
    const storedPassword = window.localStorage.getItem(`password_${username}`);
    if (storedPassword === password) {
      setUser(username);
      window.localStorage.setItem('user', username);
      nav('/');
    } else {
      setMessage('Wrong Account!');
    }
  };

  const register = (username, password, setMessage) => {
    if (window.localStorage.getItem(`password_${username}`)) {
      setMessage('User already exists');
      return;
    }
    window.localStorage.setItem(`password_${username}`, password);
    nav('/login');
  };

  const logout = () => {
    // window.localStorage.removeItem('quizState' + user);
    setUser(null);
    window.localStorage.removeItem('user');
    nav('/');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
