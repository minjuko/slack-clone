import "./App.css";
import { Routes, Route } from "react-router-dom";
import Join from "./pages/Join";
import Login from "./pages/Login";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/join" element={<Join />} />
    </Routes>
  );
}

export default App;
