const pokemonsData = (pokemons) => {
  const data = pokemons.map((pk) => {
    const name = pk.name.toUpperCase();
    const height = pk.height;
    const weigth = pk.weigth;
    const stats = pk.stats;
    const types = pk.types.map((x) => x.type.name);
    let image = pk.sprites.other.home.front_default;
    image ??= pk.sprites.other["official-artwork"]["front_default"];
    return {
      name,
      height,
      weigth,
      stats,
      types,
      image,
    };
  });
  return data;
};

export default pokemonsData;
