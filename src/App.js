import React, { useEffect, useState } from 'react';
import './style.css';
import Cartao from './components/Cartao';
import Form from './components/form/Form';

function App() {
  const [pokemons, setPokemon] = useState([]);
  const [pokemonCount, setPokemonCount] = useState('');
  const [pokemonName, setPokemonName] = useState('');

  useEffect(() => {
    let url = `https://pokeapi.co/api/v2/pokemon/?limit=${pokemonCount}&offset=0`;
    fetch(url)
      .then((response) => response.json())
      .then((res) => {
        setPokemon(res.results);
      })
      .catch((err) => console.log(err));
  }, [pokemonCount]);

  return (
    <>
      <div className="formulario">
        <Form
          pokemonCount={pokemonCount}
          setPokemonCount={setPokemonCount}
          setPokemonName={setPokemonName}
        />
      </div>
      <div className="container">
        {pokemonName ? (
          <Cartao name={pokemonName} />
        ) : (
          pokemons.map((data, index) => (
            <div key={index}>
              <Cartao name={data.name} />
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default App;
