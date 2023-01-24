import{useState} from "react";

// el primer paso a definir iun componennte es el nombre 
//el nombre de uno compo debe iniciar siempre en Mayuscula
//ahora un componente basicamente es un funcion , por ende podemos crealos 
//usand funciones -- flecha- anonimas- declarativa 


const PrimerComponente =()=>{
    //react tiene una funcion llamada useState 
    // useState es un funcion interna de react , la cual se encarga de manipular el estado de las variables
    //para poder usarla debo imporrtalo desde react 

    //al usar usestate la forma en el cual debemos crear la variable 
    //count : es la variable que usaremos para mostrar un valo 
    //setCount : es la funcion que sen encarga de poder asiganrle ese valor

    //para poder definir eta variable como poarte de useState debemos iniciar el valor 
    //de etsa variable isando useState 
    //ojo el valor que va dentro de useState sera el valor inicial de la variable 

    const[count,setCount]=useState(10);

    //const[user,setUser]=useState()

    //esta funcion retorna una vista 
    //en react usamor return() para indicar que lo qye dentro delos parateneis sera el objeto visualr que vamor a retornar 
    //algo importante es aue reactt solo puede retornar un componenete a la vez 
    //retorna solo un div 


    //vmos a crear 2 funciones una para sumar y otra para restar 
    //estas dosfunciones estara cambiando el estado de la vairbale  count 
   
    const sumar =()=>setCount(count +1);

    const restar =()=>setCount(count -1);

    const reset =()=>setCount(0)

    //const parametros=(n1,n2) =>{
    //setCount (n1+n2)
    //}


    return(
        <div>
            <h1>FUNCION DE EJEMPLO</h1>
            <h4>hola desde mi componente   {count}</h4>
            {/* vamos a crear dos botones uno para sumar y el otro para restar */}

           <button onClick={sumar}>Sumar</button>
           <button onClick={restar}>Restar</button>
           <button onClick={reset}>Reset</button>

        </div>
    )

}



export default PrimerComponente;