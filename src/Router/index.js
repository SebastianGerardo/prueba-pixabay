//para usar y definir las rutas debo installa dependencia desde react router (npm install react-router-dom)
//de las cuales inicializaremos con 3 elementos 
import{BrowserRouter,Routes,Route} from "react-router-dom";
import FormUser from "../FormUser";
import Home from "../pages/pokemon";
import Header from "../components/Header"
import Flags from "../pages/Flags";



const Router =()=>{
    return(
        <BrowserRouter>
        {/* rutas publicas */}  
        <Header/>   
        <Routes>
            
            <Route path="/" element={<Home/>}/>
            <Route path="formulario" element={<FormUser/>}/>
            <Route path="flags" element={<Flags/>}/>
        </Routes>
        </BrowserRouter>


    )
}



export default Router;