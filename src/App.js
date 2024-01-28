
import './App.css';
import { Routes, Route } from "react-router-dom";
import Join from "./pages/Join";

function App() {
  return (
    <Routes>
      <Route path="/join" element={<Join/>} />
    </Routes>
  );
}

export default App;
