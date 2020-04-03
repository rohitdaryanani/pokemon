import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PokemonDetails from './pokemonDetails';
const Pokemon = () => {
  const [pokemons, setPokemons] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        'https://pokeapi.co/api/v2/pokemon?limit=151'
      );
      setPokemons(data);
    };
    fetchData();
  }, []);
  const types = {
    fire: '#F08030',
    water: '#6890F0',
    grass: '#78C850',
    electric: '#F8D030',
    psychic: '#F85888',
    steel: '#B8B8D0',
    normal: '#A8A878',
    fairy: '#EE99AC',
    dark: '#644e40',
    flying: '#A890F0',
    ghost: '#705898',
    poison: '#A040A0',
    ice: '#98D8D8',
    ground: '#E0C068',
    rock: '#B8A038',
    dragon: '#5e1df7',
    fighting: '#C03028',
    bug: '#A8B820'
  };
  return (
    <div className="wrapper">
      {pokemons &&
        pokemons.results.map((pokemon, index) => {
          return (
            <PokemonDetails
              key={index}
              pokemonUrl={pokemon}
              index={index}
              types={types}
            />
          );
        })}
    </div>
  );
};

export default Pokemon;
