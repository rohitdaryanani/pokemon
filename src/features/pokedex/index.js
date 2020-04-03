import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Pokemon from './pokemon';
const Pokedex = () => {
  const [pokedex, setPokedex] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        'https://pokeapi.co/api/v2/pokemon?limit=151'
      );
      setPokedex(data);
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
      {pokedex &&
        pokedex.results.map((pokemon, index) => {
          return (
            <Pokemon
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

export default Pokedex;
