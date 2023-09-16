import React, { useState } from 'react';

function Form({ pokemonCount, setPokemonCount, setPokemonName }) {
    const [pesquisaInput, setPesquisaInput] = useState('')

  const handleCountChange = (e) => {

    const valor = parseInt(e.target.value);
    if(valor < 0) {
        alert('O número de pokemóns não pode ser menor que zero!')
    } else {
        setPokemonCount(valor);
    }
  };

  const handleSearch = () => {

    if (pesquisaInput !== '') {
      setPokemonName(pesquisaInput);
    } else {
        setPokemonName('')
    }
  };

  return (
    <div>
      <label>Digite a quantidade de Pokemóns a ser exibida: </label>
      <br />
      <input
        type="number"
        id="pokemonCount"
        value={pokemonCount}
        onChange={handleCountChange}
      />
      <div>
        <label htmlFor="searchInput">Pesquisar um Pokémon pelo seu nome:</label>
        <br />
        <input
          type="text"
          id="searchInput"
          value={pesquisaInput}
          onChange={(e) => setPesquisaInput(e.target.value)}
        />
        <br />
        <button onClick={handleSearch}>Pesquisar</button>
      </div>
    </div>
  );
}

export default Form;
