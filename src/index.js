import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { RegisterContextProvider } from "./Context/RegisterContext";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <RegisterContextProvider>
      <App />
    </RegisterContextProvider>
  </StrictMode>,
  rootElement
);
