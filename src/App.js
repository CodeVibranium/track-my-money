import Home from "./Components/Home/Home";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Components/HomePage/HomePage";
function App() {
  return (
    <div className="App bg-gradient-to-r from-green-400 to-green-600">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
