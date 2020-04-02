import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PokemonDetails from './pokemonDetails';
const Pokemon = () => {
  const [pokemons, setPokemons] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        'https://pokeapi.co/api/v2/pokemon?limit=10'
      );
      setPokemons(data);
    };
    fetchData();
  }, []);
  return (
    <div className="wrapper">
      {pokemons &&
        pokemons.results.map((pokemon, index) => {
          return (
            <PokemonDetails key={index} pokemonUrl={pokemon} index={index} />
          );
        })}
    </div>
  );
};

export default Pokemon;
