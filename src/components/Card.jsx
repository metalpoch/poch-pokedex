import { RiHeart2Fill, RiSwordFill, RiShieldFill } from "react-icons/ri";
import {
  GiMineExplosion,
  GiArrowsShield,
  GiWingfoot,
  GiCancel,
} from "react-icons/gi";

const Card = ({ pokemons }) => {
  const icon = (stat) => {
    if (stat === "hp") return <RiHeart2Fill style={{ color: "red" }} />;
    if (stat === "attack") return <RiSwordFill style={{ color: "brown" }} />;
    if (stat === "defense") return <RiShieldFill style={{ color: "green" }} />;
    if (stat === "special-attack")
      return <GiMineExplosion style={{ color: "brown" }} />;
    if (stat === "special-defense")
      return <GiArrowsShield style={{ color: "goldenrod" }} />;
    if (stat === "speed") return <GiWingfoot style={{ color: "white" }} />;
    return <GiCancel style={{ color: "red" }} />; // ?
  };

  return (
    <div className="row">
      {pokemons.map((pokemon, i) => {
        return (
          <div className="col card" key={i}>
            <img
              className="card-image"
              width={"200px"}
              src={pokemon.sprites.other.home.front_default}
            />

            <h1 className="card-title">{pokemon.name.toUpperCase()}</h1>
            <div className="card-body">
              {pokemon.stats.map((stat) => {
                return (
                  <p>
                    {icon(stat.stat.name)}{" "}
                    {`${stat.stat.name}: ${stat.base_stat}`}
                  </p>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
