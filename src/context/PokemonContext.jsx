import { createContext, useState, useEffect } from "react";

const PokemonContext = createContext();

const PokemonContextProvider = (props) => {
  const [pokemonCache, setPokemonCache] = useState([]);
  const [pokemons, setPokemons] = useState([]);
  const url = "https://pokeapi.co/api/v2/pokemon";

  const pokemonsId = [];
  for (let i = 0; i < 20; i++) {
    pokemonsId.push(Math.floor(Math.random() * 1000) + 1);
  }

  useEffect(() => {
    const getPokemons = async () => {
      const monsters = await Promise.all(
        pokemonsId.map(async (id) => {
          const data = fetch(`${url}/${id}`)
            .then((res) => res.json())
            .then((data) => data)
            .catch((err) => {
              console.log({ err, pochError: "Error" });
            });
          return data;
        })
      );
      setPokemonCache(monsters);
      setPokemons(monsters);
    };
    getPokemons();
  }, []);

  const handlePokemon = async (name) => {
    if (name && name.charAt(0) != " ") {
      const data = await fetch(`${url}/${name.toLowerCase()}`)
        .then((res) => res.json())
        .then((data) => data);

      if (data) setPokemons([data]);
    } else setPokemons(pokemonCache);
  };

  return (
    <>
      <PokemonContext.Provider
        value={{
          handlePokemon,
          pokemons,
        }}
      >
        {props.children}
      </PokemonContext.Provider>
    </>
  );
};

export { PokemonContext, PokemonContextProvider };
