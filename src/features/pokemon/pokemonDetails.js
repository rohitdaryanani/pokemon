import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PokemonDetails = ({ pokemonUrl, types }) => {
  const [pokemon, setPokemon] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(pokemonUrl.url);
      setPokemon(data);
    };
    fetchData();
  }, [pokemonUrl]);
  if (pokemon) {
    const pokemonType = pokemon.types.map(type => type.type.name);

    const gradiant = `linear-gradient(90deg, ${types[pokemonType[0]]} 50%, ${
      types[pokemonType[1]]
    } 50%)`;

    console.log(pokemon.name, pokemonType.length !== 1 && gradiant);
    // linear-gradient(90deg, #78C850 50%, #A040A0 50%)
    return (
      <div
        className="pokemon"
        style={{
          background:
            pokemonType.length === 1 ? types[pokemonType[0]] : gradiant
        }}
      >
        <img
          src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`}
          loading="lazy"
          alt=""
        />
      </div>
    );
  }
  return <p>Loading...</p>;
};

export default PokemonDetails;
