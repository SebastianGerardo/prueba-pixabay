import { useState } from "react";
import { Button, Dialog, DialogContent, Grid, Slider,Chip } from "@mui/material";
import { getDataFromPokemon } from "../../services";

const PokemonDetail = (props) => {
  const [abrir, setAbrir] = useState(false);

  const [pokemonData, setPokemonData] = useState({});

  const fecthDetailFromPokemon = async () => {
    const pokemon = await getDataFromPokemon(props.url);
    setPokemonData(pokemon);
  };
  //vamos hacer un funcion la cual se encargue de cambiar el estado

  const handleOpenDialog = async () => {
    //cuando se abre el modal es true
    if (!abrir) {
      await fecthDetailFromPokemon();
    }
    setAbrir(!abrir);
  };

  return (
    <div>
      <Button onClick={handleOpenDialog} variant="contained" color="primary">
        Ver Detalle
      </Button>
      <Dialog
        open={abrir}
        fullWidth={"md"}
        maxWidth={"md"}
        onClose={handleOpenDialog}
      >
        <DialogContent>
          {Object.keys(pokemonData).length > 0&&(
            <div>
              <h2>{props.nombre}</h2>
              <Grid container>
                <Grid item md ={6}>
                  <h4>Habilidades</h4>
                  {pokemonData.abilities.map((abilitie)=>(
                        <Chip
                        label={abilitie.ability.name}/>
                  ))}
                </Grid>
                <Grid item sm={6}>
                  <img
                  src={pokemonData.sprites.versions["generation-iii"]["firered-leafgreen"]["back_shiny"]} width={100}/>

                </Grid>

              </Grid>
            </div>
          )}
          <Button onClick={handleOpenDialog}>Cerrar</Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PokemonDetail;
