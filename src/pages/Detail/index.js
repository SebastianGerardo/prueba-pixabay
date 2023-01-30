import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getDataFromPokemon } from "../../services";
import { Container, Grid, Button, Chip } from "@mui/material";
import React from "react";

const Detail = () => {
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
            <h3>{country.name.official}</h3>
            <Grid container spacing={3} mt={1}>
                <Grid item md={6}>
                  <p>
                    <b>Native Name:</b> {country.name.common}
                  </p>
                  <p>
                    <b>Population:</b> {country.population}
                  </p>
                  <p>
                    <b>Region:</b> {country.region}
                  </p>
                  <p>
                    <b>Sub Region:</b> {country.subregion}
                  </p>
                  <p>
                    <b>Capital:</b> {country.capital[0]}
                  </p>
                </Grid>
                <Grid item md={6}>
                  <p>
                    <b>Top Level Domain:</b> {country.tld}
                  </p>
                  <p>
                    <b>Currencies:</b> {Object.keys(country.currencies).map((currency) => (
                      <span>{currency}</span>
                    ))}
                  </p>
                  <p>
                    <b>Languages:</b> {Object.values(country.languages)[0]}
                  </p>
                </Grid>
            </Grid>            
          </Grid>
        </Grid>
      )}
    </Container>
  );
};

export default Detail;
