import React, { useState } from 'react';
import { ContainerForm, ContainerSearch, Input, Button } from './form-style';

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
  
  const handleSearch = (e) => {

    e.preventDefault();
    
    if (pesquisaInput !== '') {
      
      setPokemonName(pesquisaInput);
    } else {
      setPokemonName('')
    }
  };
  

  return (

    <ContainerForm>

    <br />
    <h3>Olá, bem vindo ao seu guia de Pokemóns definitivo.</h3>
    <h4>Para começar, escolha uma das opções abaixo:</h4>

      <ContainerSearch>
      <br />
      <Input
        type="number"
        id="pokemonCount"
        placeholder='Quantidade de Pokemóns'
        value={pokemonCount}
        onChange={handleCountChange}
      />
      </ContainerSearch>
      <ContainerSearch>
        <Input
          type="text"
          id="searchInput"
          placeholder='Pesquisa por nome'
          value={pesquisaInput}
          onChange={(e) => setPesquisaInput(e.target.value)}
        />
        <br />
        <br />
        <Button onClick={handleSearch}>Buscar</Button>
        </ContainerSearch>
      </ContainerForm>
  );
}

export default Form;
