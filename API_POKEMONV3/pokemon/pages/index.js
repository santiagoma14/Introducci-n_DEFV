import Head from 'next/head'
import Image from 'next/image'
import HomeCss from '../styles/Home.module.css'
import Link from 'next/link' 

export default function Home({pokemonListo}) {
  console.log("pokemonListo", pokemonListo)
  return (
    
    <>
    <div>
      <h1 className={HomeCss.Titulo}>Consumo Api</h1>
      <h3 className={HomeCss.SubTitulo}>¡Selecciona el pokemon que desees!</h3>
    </div>
    <ul className={HomeCss.columnas}>
      {pokemonListo.map((pokemon, index) => {
      return(
        <li>
          <Link href={{
            pathname: '/pokemon/[name]',
            query: {name: pokemon.name}
          }} legacyBehavior>
            <a id="link">
              <div className={`${HomeCss.card} ${pokemon.types[0].type.name}`}>
                <div className={HomeCss.nombreTipos}>
                  <h3>{pokemon.name}</h3>
                  <div className={HomeCss.tipos}>
                    {pokemon.types.map((tipo, index) =>{
                      return(
                        <p className={HomeCss.tipo}>{tipo.type.name}</p>
                      )
                    })}
                  </div>
                </div>
                <img src={pokemon.image} 
                height="100" 
                width={100}
                className={HomeCss.imagen}
                />
              </div>
            </a>
          </Link>
        </li>
      );
    })}  
    </ul> 
  
    </> 
  );
}

export async function getServerSideProps() {
  
  const traerPokemon = (numero) => {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${numero}`)
    .then(response => response.json())
    .then(data => data)
  }
  
  let arrayPokemon = []

  for (let index = 1; index <= 40; index++) {
    let data = await traerPokemon(index)
    arrayPokemon.push(data)
    
  }

  let pokemonListo = arrayPokemon.map(pokemon =>{
    return({
      id: pokemon.id,
      name: pokemon.name,
      image: pokemon.sprites.other.dream_world.front_default,
      types: pokemon.types

   })
  })

  return{
    props: {
      pokemonListo
    }
  }
}
