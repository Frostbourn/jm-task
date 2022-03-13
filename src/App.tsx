import "./App.css";
import { Routes, Route } from "react-router-dom";
import CountriesList from "./components/CountriesList/CountriesList";
import Country from "./components/Country/Country";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CountriesList />} />
        <Route path="/:code" element={<Country />} />
      </Routes>
    </div>
  );
}

export default App;
