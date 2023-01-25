import { useState, useEffect } from "react";
import { getDataFromPokemon } from "../../services";
import { Container, Card, CardContent, CardMedia, Grid } from "@mui/material";

const Home = () => {
  const imgUrl =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/";
  //vamos a crear iuna variable la cual se encarque de guardar la lista de pokemones
  //realizar hooks

  const [pokemons, setPokemons] = useState([]);
  //debemos crear una funcion la cual se enacrgue de ejcutar el getdafrompokemon Y
  // la data que retorne esa funcion guradarlo usando setPokemon
  const fetchPokemonList = async () => {
    const listPokemons = await getDataFromPokemon();
    //ahora como ya rcuperamo la lista hay que usar
    //la fuincion setPokemon para poder guaradrlo esa lista de pokemons
    console.log("listadepokemones", listPokemons.results);
    setPokemons(listPokemons.results);
  };
  //en react hay una funcion llamada useEffetc la cual se ejecuta cunado la pagina esta iniciando  , vamos a usar useEfeect siq ueremos ejecutar algo al incioa de la aplicacion
  //la estructura de useEffect es la sgt

  useEffect(() => {
    //ACA llamamos la funcion a ejecutar
    fetchPokemonList();
    //importante ´pr ahor los useEfecct debemos colocarle un array vacio
    //esto se hace para evitar un bucle en la funcion de peticion infinita
  }, []);

  return (
    <Container>
      <h1 className="title-pokemon">POKEDEX g19</h1>
      <Grid container spacing={3}>
        {pokemons.length > 0 &&
          pokemons.map((pokemon, index) => (
            //aca el codigo visual
            <Grid item md={4} lg={4} sm={12} xs={12}>
              <Card className="card-pokemon">
                <CardMedia
                  component="img"
                  className="img-pokemon"
                  image={`${imgUrl}${index + 1}.svg`}
                />
                <CardContent className="center">
                  <h3 className="name-pokemon">{pokemon.name}</h3>
                </CardContent>
              </Card>
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

export default Home;
