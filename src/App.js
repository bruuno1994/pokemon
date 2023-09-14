import React, { useEffect, useState } from 'react';
import './style.css'

function App() {

  const [pokemons, setPokemon] = useState([])
  const [pokemonName, setPokemonName] = useState('')

  useEffect(() => {

    let url = `https://pokeapi.co/api/v2/pokemon/?limit=5&offset=0`;
     fetch(url)
     .then(response => response.json())
     .then(res => {
         setPokemon(res.results)
       })
     .catch(err => console.log(err))

  },[])

  console.log(pokemons);

  const handleSearch = (e) => {
    e.preventDefault(); // Impedir o envio do formulário
  }

  return(
    <div className='container'>
      <header>
        <strong>Pokemon API</strong>
      </header>
      <br />

      <div>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Digite o nome do Pokémon"
            value={pokemonName}
            onChange={(e) => setPokemonName(e.target.value)}
          />
          <br />
          <br />
          <button type="submit">Buscar</button>
        </form>
        { pokemons.map((data, index) => (
          <div key={index}>
            <p >{ data.name }</p>
          </div>
        )) }
      </div>
    </div>
  )
}

export default App;