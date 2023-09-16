/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";

const Cartao = ({ ...props }) => {
  const [pokemons, setPokemon] = useState([]);
  const [pokemonAbilities, setPokemonAbilities] = useState([]);
  const [pokemonType, setPokemonType] = useState([]);

  useEffect(() => {
    let url = `https://pokeapi.co/api/v2/pokemon/${props.name}`;
    fetch(url)
      .then((response) => response.json())
      .then((res) => {
        setPokemon(res);
        setPokemonAbilities(
          res.abilities.map((data) => {
            return data.ability.name;
          })
        );
        setPokemonType(
          res.types.map((data) => {
            return data.type.name;
          })
        );
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {
        <div class="card mb-3" style={{width: 540}}>
        <div class="row g-0">
          <div class="col-md-4">
            <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemons.id}.png`}
            alt="" width="150px" />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title"><strong> Nome: </strong>{pokemons.name}</h5>
              <p class="card-text"> <strong> Tipos : </strong>{pokemonType[0]} /{" "}
            {pokemonType[1] ? pokemonType[1] : ""}{" "}</p>
              <p class="card-text"> <strong> Habilidades : </strong> {pokemonAbilities[0]} /{" "}
            {pokemonAbilities[1] ? pokemonAbilities[1] : ""}{" "}</p>
            </div>
          </div>
        </div>
      </div>
      }
    </div>
  );
};

export default Cartao;
