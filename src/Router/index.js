//para usar y definir las rutas debo installa dependencia desde react router (npm install react-router-dom)
//de las cuales inicializaremos con 3 elementos 
import{BrowserRouter,Routes,Route} from "react-router-dom";
import FormUser from "../FormUser";
import Home from "../pages/pokemon";



const Router =()=>{
    return(
        <BrowserRouter>
        {/* rutas publicas */}     
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="formulario" element={<FormUser/>}/>
        </Routes>
        </BrowserRouter>


    )
}



export default Router;