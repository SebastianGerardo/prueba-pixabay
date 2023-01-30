import { useState, useEffect } from "react";
import { getDataFromPokemon } from "../../services";
import PokemonDetail from "../../components/PokemonDetail";
import { Container, Card, CardContent, CardMedia, Grid } from "@mui/material";

const Home = () => {
  const imgUrl =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/";

  const [pokemons, setPokemons] = useState([]);

  const fetchPokemonList = async () => {
    const listPokemons = await getDataFromPokemon();

    setPokemons(listPokemons.results);
  };

  useEffect(() => {
    fetchPokemonList();
  }, []);

  return (
    <Container>
      <h1 className="title-pokemon">POKEDEX g19</h1>
      <Grid container spacing={3}>
        {pokemons.length > 0 &&
          pokemons.map((pokemon, index) => (
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
                <PokemonDetail nombre={pokemon.name} url={pokemon.url}/>
              </Card>              
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

export default Home;
