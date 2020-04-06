import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Test = props => {
  const id = props.match.params.id;
  useEffect(() => {
    const fetchData = async () => {
      const [
        { data: stats },
        { data: info },
        { data: evolution }
      ] = await Promise.all([
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`),
        axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}/`),
        axios.get(`https://pokeapi.co/api/v2/evolution-chain/${id}/`)
      ]);
      const introText = info.flavor_text_entries.filter(
        i => i.language.name === 'en'
      )[0].flavor_text;
      const genre = info.genera.filter(i => i.language.name === 'en')[0].genus;
      console.log(genre);
    };
    fetchData();
  }, [id]);
  return <p>Test</p>;
};

export default Test;
