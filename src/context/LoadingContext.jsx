import { createContext, useState } from "react";

export const LoadingContext = createContext();

// eslint-disable-next-line react/prop-types
export const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};
