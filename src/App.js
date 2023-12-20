import "./App.css";
import { Route, Routes } from "react-router-dom";

// [importing components]
import HomePage from "./pages/homePage/HomePage";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import StudentsPage from "./pages/studentsStoriesPage/StudentsPage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/students/:index" element={<StudentsPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
