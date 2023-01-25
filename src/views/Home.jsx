import { PokemonContextProvider } from "../context/PokemonContext";
import Search from "../components/Search";
import Card from "../components/Card";

const Home = () => {
  return (
    <PokemonContextProvider>
      <Search />
      <Card />
    </PokemonContextProvider>
  );
};

export default Home;
