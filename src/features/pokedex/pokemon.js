import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Pokemon = ({ pokemonUrl, types }) => {
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

    const backgroundType =
      pokemonType.length === 1
        ? types[pokemonType[0]]
        : `linear-gradient(90deg, ${types[pokemonType[0]]} 50%, ${
            types[pokemonType[1]]
          } 50%)`;

    return (
      <div
        className="pokemon"
        style={{
          background: backgroundType
        }}
      >
        <Link to={`/pokemon/${pokemon.id}`}>
          <img
            src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`}
            loading="lazy"
            alt=""
          />
          <div className="pokemon-name">
            <span>{pokemon.name}</span>
            <span>#{pokemon.id}</span>
          </div>
        </Link>
      </div>
    );
  }
  return (
    <div className="pokemon-loading">
      <img
        src="https://cdn.dribbble.com/users/621155/screenshots/2835314/simple_pokeball.gif"
        alt=""
      />
    </div>
  );
};

export default Pokemon;
