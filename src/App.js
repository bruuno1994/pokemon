import React, { useEffect, useState } from 'react';
import './style.css'
import Card from './components/Card'

function App() {

  const [pokemons, setPokemon] = useState([])
  //const [pokemonName, setPokemonName] = useState('')

  useEffect(() => {

    let url = `https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0`;
     fetch(url)
     .then(response => response.json())
     .then(res => {
         setPokemon(res.results)
       })
     .catch(err => console.log(err))

  },[])

  return(
    <div className='container'>

          
        {/* {pokemonName ? <Card name={pokemonName} /> : ''} */}

        { pokemons.map((data, index) => (
          <div key={index}>
            <Card name={data.name} />
          </div>
        )) }
      </div>
  )
}

export default App;