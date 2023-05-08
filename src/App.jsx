import CitiesDisplayed from "./components/displayedCities/CitiesDisplayed.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="everything">
        <h1 className="text-center">World clock</h1>
        <CitiesDisplayed />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
