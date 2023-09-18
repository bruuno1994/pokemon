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

  const getTypeColorClass = () => {
    const type1 = pokemonType[0];
    const type2 = pokemonType[1];
  
    // Lógica para determinar a classe de cor com base nos tipos
    if (type1 && type2) {
      return `${type1}-${type2}-color`;
    } else if (type1) {
      return `${type1}-color`;
    } else if (type2) {
      return `${type2}-color`;
    } else if (type2 && type1) {
      return `${type2}-${type1}-color`;
    } else {
      return ""
    }
  };

  const pokemonTypeClass = getTypeColorClass();

  return (
    <div>
      {
        <div className={`card mb-3 ${pokemonTypeClass}`} style={{width: 500}} >
        <div className="row g-0">
          <div className={`col-md-4 ${pokemonTypeClass}`}>
            <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemons.id}.png `}
            alt="" width="150px" />
          </div>
          <div className={`col-md-8 ${pokemonTypeClass}`}>
            <div className={`card-body`}>
              <h5 className={`card-text `}><strong> Nome: </strong>{pokemons.name}</h5>
              <p className={`card-text `}> <strong> Tipos : </strong>{pokemonType[0]} /{" "}
            {pokemonType[1] ? pokemonType[1] : ""}{" "}</p>
              <p className={`card-text `}> <strong> Habilidades : </strong> {pokemonAbilities[0]} /{" "}
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