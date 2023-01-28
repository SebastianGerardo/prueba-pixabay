import { getDataFromPokemon } from "../../services"
import { useState, useEffect } from "react";
import { CardMedia, Container,
        Grid,
        TextField} from "@mui/material";


const Pixabay = () => {
    
    const [ image, setImage ] = useState([]);
    const [ filter, setFilter ] = useState("");

    const fetchImage = async() => {
        const response = await getDataFromPokemon(
            `https://pixabay.com/api/?key=23400745-88c9fb4b47626b42faf23986e&q=7D&per_page=50`
            );
        
        setImage(response.hits);
    }

    useEffect(() => {
        fetchImage();
    }, [])

    
    const searchImage = async(e) => {
        setFilter(e.target.value);

        setImage([]);
        const response = await getDataFromPokemon(`https://pixabay.com/api/?key=23400745-88c9fb4b47626b42faf23986e&q=${e.target.value}&per_page=50`);
        
        console.log(response.hits)
        setImage(response.hits);

        if (filter === 0) {
            fetchImage();
        }

        if (filter.length > 3) {
            const filterImage = image.filter((image) => image.id.toUpperCase().includes(filter.toUpperCase()));
            setImage(filterImage);
        }
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