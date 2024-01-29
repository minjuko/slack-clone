import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Join from "./pages/Join";
import Login from "./pages/Login";
import Main from "./pages/Main";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { clearUser, setUser } from "./store/userReducer";

function App() {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const { isLoading, currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    const unsubcribe = onAuthStateChanged(getAuth(), (user) => {
      if (!!user) {
        dispatch(setUser(user));
      } else {
        dispatch(clearUser());
      }
    });
    return () => unsubcribe();
  }, [dispatch]);
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/join"
        element={currentUser ? <Navigate to="/" /> : <Join />}
      />
    </Routes>
  );
}

export default App;
