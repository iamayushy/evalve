import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const RegisterContext = createContext();

const RegisterContextProvider = ({ children }) => {
  const [auth, setAuth] = useState(true);

  return (
    <RegisterContext.Provider value={{ setAuth, auth }}>
      {children}
    </RegisterContext.Provider>
  );
};

export { RegisterContextProvider };
