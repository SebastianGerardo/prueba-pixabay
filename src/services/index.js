//este va ser nuestro archivo donde vamos alamcenar nuestras peticiones 

//una buena practica es tener la url del API en uina variable

const BASE_URL = "https://pokeapi.co/api/v2/pokemon?limit=100"

//PODEMOS CREAR UNA FUNCION GENERICA 
//como paramtero vamos a recbir la url que puede ser la que lista a o la que nos da el detalle 
//url sera el paramettre que recibe la url hacia donde se hara la peticion
//url = BASE_URL significa que si la url esta vaia es decir cuando llamemos a la funcion no le pasamo el valor por defecto sera BASE_URL 
// la url tomara el valor de BASE_URL
//getDataFromPokemon()

//url toma el valor link.com
//getDatFromPokemon(link.com)

export const getDataFromPokemon = async (url = BASE_URL)=>{

    try{
        //ahora debmos ejecutar el fetch para poder llamar la informacion
        const response = await fetch(url);
        const data = await response.json();
        console.log("data",data);
        return data;
    }catch(error){
        console.log(error.message)
    }
}


