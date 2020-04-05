import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import Pokemon from './pokemon';
const Pokedex = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [nextUrl, setNextUrl] = useState(
    'https://pokeapi.co/api/v2/pokemon?limit=20'
  );
  const [nu, setNu] = useState(undefined);
  const [observer, setObserver] = useState(undefined);
  const loadingRef = useRef(null);

  const fetchData = async () => {
    try {
      const {
        data: { results, next }
      } = await axios.get(nextUrl);
      setPokemonList([...pokemonList, ...results]);
      setNextUrl(next);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0
    };

    setTimeout(() => {
      if (!observer) {
        const obs = new IntersectionObserver(e => {
          if (e[0].intersectionRatio === 1) setNu(Date.now());
        }, options);
        obs.observe(loadingRef.current);
        setObserver(obs);
      }
    }, 1000);

    fetchData();
  }, [nu]);

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
  if (pokemonList.length === 0) {
    return (
      <img
        style={{ width: 30, height: 30 }}
        src="https://i.imgur.com/XLJxE8S.gif"
        alt="loading"
      />
    );
  }
  return (
    <>
      <div className="wrapper">
        {pokemonList.map((pokemon, index) => {
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
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#e2e1e0'
        }}
        className="loading"
        ref={loadingRef}
      >
        <img
          style={{ width: 30, height: 30 }}
          src="https://i.imgur.com/XLJxE8S.gif"
          alt="loading"
        />
      </div>
    </>
  );
};

export default Pokedex;
