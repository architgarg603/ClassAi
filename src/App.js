import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Classes from "./pages/Classes";
import Dashboard from "./pages/Dashboard";
import Details from "./pages/Details";
import Homepage from "./pages/Homepage";
import Lectures from "./pages/Lectures";
import Videocall from "./pages/Videocall";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/details" element={<Details />} />
        <Route path="/lectures" element={<Lectures />} />
        <Route path="/videocall" element={<Videocall />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
