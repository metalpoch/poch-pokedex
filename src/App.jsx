import { PokemonContextProvider } from "./context/PokemonContext";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Card from "./components/Card";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <PokemonContextProvider>
        <Search />
        <Card />
      </PokemonContextProvider>
    </>
  );
}

export default App;
