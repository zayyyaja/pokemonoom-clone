import { useState } from "react";
import pokemonsJson from "../../data/pokemon.json";
import PokemonItem from "../PokemonItem/PokemonItem";

import "./PokemonList.css";

function PokemonList() {
  const [pokemons] = useState(pokemonsJson);
  const [filterPokemons, setFilterPokemons] = useState(pokemonsJson);
  const handleSearch = (e) => {
    let search = pokemons.filter((item) =>{
      return item.name.toLowerCase().includes(e.target.value);
    });
    setFilterPokemons(search);
  };
  return (
    <div>
    <input
      type="text"
      placeholder="lagi nyari pokemon...."
      className="search"
      onChange={handleSearch}
      />
      <div className="list-pokemon">
        {filterPokemons.length === 0 ? (
          <div>gak nemuuuu </div>
        ) : (
          filterPokemons.map((item) => (
         <PokemonItem 
         key={item.id} pokemon={item} />
        )))}
      </div>
    </div>
  );
}

export default PokemonList;
