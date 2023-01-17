import { useState, useEffect } from "react";
import Search from "../components/Search";
import Card from "../components/Card";
const Home = () => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const getMonsters = async () => {
      const dataBase = async () => {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon");
        return response.ok
          ? response.json()
          : { error: "error to download Pokemon data base" };
      };
      const data = await dataBase();
      const dataMonster = await Promise.all(
        data.results.map(async (item) => {
          const getDataMonster = async (url) => {
            const response = await fetch(url);
            return response.ok
              ? response.json()
              : { error: "error to download Pokemon data" };
          };
          return await getDataMonster(item.url);
        })
      );

      setPokemon(dataMonster);
    };
    getMonsters();
  }, []);

  return (
    <>
      <Search />
      <Card data={pokemon} />
    </>
  );
};

export default Home;
