import { useState ,useEffect } from "react";
import { getDataFromPokemon } from "../../services";



const Home =()=>{

   const imgURl="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/"
   //vamos a crear iuna variable la cual se encarque de guardar la lista de pokemones
   //realizar hooks

   const[pokemons,setPokemons] =useState([])
   //debemos crear una funcion la cual se enacrgue de ejcutar el getdafrompokemon Y
   // la data que retorne esa funcion guradarlo usando setPokemon
   const fetchPokemonList = async()=>{
    const listPokemons = await getDataFromPokemon()
    //ahora como ya rcuperamo la lista hay que usar 
    //la fuincion setPokemon para poder guaradrlo esa lista de pokemons 
    console.log("listadepokemones",listPokemons.results);
    setPokemons(listPokemons.results)
   }
//en react hay una funcion llamada useEffetc la cual se ejecuta cunado la pagina esta iniciando  , vamos a usar useEfeect siq ueremos ejecutar algo al incioa de la aplicacion
//la estructura de useEffect es la sgt 

useEffect(()=>{
    //ACA llamamos la funcion a ejecutar
    fetchPokemonList()
    //importante ´pr ahor los useEfecct debemos colocarle un array vacio 
    //esto se hace para evitar un bucle en la funcion de peticion infinita 
},[])





    return(
        <>
            <h1>
                POKEDEX
            </h1>
        </>
    )

}




export default Home;