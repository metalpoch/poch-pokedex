import { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";

const Search = () => {
  const { handlePokemon } = useContext(PokemonContext);
  return (
    <>
      <div className="center">
        <input
          className="search-field"
          placeholder="Search Pokémon"
          onChange={(e) => {
            handlePokemon(e.target.value);
          }}
        />
      </div>
    </>
  );
};

export default Search;
