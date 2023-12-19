import "./App.css";

// [importing components]
import HomePage from "./pages/homePage/HomePage";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />

      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
