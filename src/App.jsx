import CitiesDisplayed from "@components/displayedCities/CitiesDisplay";
import Footer from "@components/Footer";
import "@/App.css";

function App() {
  return (
    <div>
      <div className="w-[600px] h-[600px] mx-auto my-[100px] rounded-full bg-white shadow-inner sm:rounded-2xl sm:w-96">
        <h1 className="text-center text-4xl pt-16 pb-8 text-rose-500 font-bold">
          World clock
        </h1>
        <CitiesDisplayed />
      </div>
        <Footer />
    </div>
  );
}

export default App;
