import { Register } from "./routes/Register";
import "./styles.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./routes/Home";

export default function App() {
  return (
    <div className="App">
      <h1>Shopee</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />}>
            <Route path="Home" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
