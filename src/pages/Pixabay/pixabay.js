import { getDataFromPokemon } from "../../services"
import { useState, useEffect } from "react";
import { CardMedia, Container,
        Grid,
        TextField} from "@mui/material";


const Pixabay = () => {
    
    const [ image, setImage ] = useState([]);

    const fetchImage = async() => {
        const response = await getDataFromPokemon(
            `https://pixabay.com/api/?key=23400745-88c9fb4b47626b42faf23986e&q=all&per_page=50`
            );
        
        setImage(response.hits);
    }

    useEffect(() => {
        fetchImage();
    }, [])

    
    const searchImage = async(e) => {
        const event = e.target.value

        if (event.length === 0) {
            fetchImage();
        } 

        if (event.length > 3) {
            filterImage(event);
        }

    }

    const filterImage = async (e) => {
        const response = await getDataFromPokemon(`https://pixabay.com/api/?key=23400745-88c9fb4b47626b42faf23986e&q=${e}&per_page=50`);

        setImage(response.hits);
    }

    return (
        <Container className="container">
            <TextField 
            className="input" 
            onChange={searchImage}
            placeholder="Busca aquí"
            />
            <section className="cards">
            {image.length > 0 && 
             image.map((e) => (
                <Grid item md={3} xs={12} m={1}>
                    <CardMedia
                    className="image"
                    component="img"
                    height={200}
                    image={e.webformatURL} 
                    />
                </Grid>
             ))}
            </section>
        </Container>
    );
}

export default Pixabay;