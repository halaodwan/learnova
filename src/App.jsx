import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Flashcards from "./pages//Flashcards/Flashcards";
import Dashboard from "./pages/Dashboard";
import Explanations from "./pages/Explanations";
function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/explanations" element={<Explanations />} />
        <Route path="/flashcards" element={<Flashcards />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;