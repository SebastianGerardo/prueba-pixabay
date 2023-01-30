import{BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "../pages/pokemon";
import Header from "../components/Header"
import Flags from "../pages/Flags";
import Detail from "../pages/Detail";
import Pixabay from "../pages/Pixabay/pixabay";



const Router =()=>{
    return(
        <BrowserRouter>
        <Header/>   
        <Routes>            
            <Route path="/" element={<Home/>}/>
            <Route path="/flags" element={<Flags/>}/>
            <Route path="/pixabay" element={<Pixabay/>}/>
            <Route path="/flags/detail/:name" element={<Detail/>}/>
        </Routes>
        </BrowserRouter>


    )
}


export default Router;