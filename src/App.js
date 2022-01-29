import Home from "./Components/Home/Home";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Components/HomePage/HomePage";
import { useContext } from "react";
import { AuthContext } from "./Context/AuthContext";
import RequireAuthentication from "./Context/RequireAuthentication";
function App() {
  const { userState } = useContext(AuthContext);
  return (
    <div className="App bg-gradient-to-r from-green-400 to-green-600">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/home"
          element={
            <RequireAuthentication>
              <Homepage />
            </RequireAuthentication>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
