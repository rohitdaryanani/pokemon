import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PokemonDetails = ({ pokemonUrl }) => {
  const [pokemon, setPokemon] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(pokemonUrl.url);
      setPokemon(data);
    };
    fetchData();
  }, [pokemonUrl]);
  if (pokemon) {
    return (
      <div className="pokemon">
        <img
          src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`}
          alt=""
        />
      </div>
    );
  }
  return <p>Loading...</p>;
};

export default PokemonDetails;
