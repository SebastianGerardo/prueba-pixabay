import { useState } from "react";
import { TextField,Button } from "@mui/material";
//manipula el estado de la variable




const FormUser =()=>{


const [valorDeinputs,setValorInputs] = useState({
    nombre :"",
    apellido:"",
    correo:"",
    password:""
});


const handleInputValues = (e)=>{
    //debemos extraer 2 cosas del event
    //1 el name de cadq input -
    //2 el value de cada input 
    //name = e.target.value 
    
    const {name,value} = e.target;

    setValorInputs({
        ...valorDeinputs,
        [name]:value,
    });

}



    return(
        <div>
            <form>
                <h4>Formulario de usuario </h4>
                <h5>Nombre</h5>
                <h5>Apellido</h5>
                <h5>Correo</h5>
                <h5>Password</h5>
                <p>
                    <TextField
                    type="text"
                    name= "nombre"
                    variant= "outlined"
                    label="ingrese su nombre"/>
                </p>
                <p>
                    <TextField
                    type="text"
                    name= "apellido"
                    variant= "outlined"
                    label="ingrese su nombre"/>
                </p>
                <p>
                    {/* <Button variant ="contained" color="danger" type="submit">
                        Registrar
                    </Button> */}
                </p>
             
            </form>

        </div>
    )
}


export default FormUser;