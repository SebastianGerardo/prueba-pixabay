import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getDataFromPokemon } from "../../services";
import { Container, Grid, Button, Chip } from "@mui/material";
import React from "react";

const Detail = () => {
  //hooks de parametro --
  const { name } = useParams();
  const history = useNavigate();

  const [country, setCountry] = useState({});

  const fetchCountry = async () => {
    const response = await getDataFromPokemon(
      `https://restcountries.com/v3.1/name/${name}`
    );
    console.log(response);
    setCountry(response[0]);
  };

  useEffect(() => {
    fetchCountry();
  }, []);

  return (
    <Container>
      <Button variant="outlined" onClick={() => history(-1)}>
        Back
      </Button>
      {Object.keys(country).length > 0 && (
        <Grid
          container
          alignItems="center"
          spacing={3}
          sx={{ height: "100vh" }}
        >
          <Grid item md={6}>
            <img src={country.flags.svg} width={400} alt="banderas" />
          </Grid>
          <Grid item md={6}>
            
          </Grid>
        </Grid>
      )}
    </Container>
  );
};

export default Detail;
