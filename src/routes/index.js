//Import Routers
import {Router} from 'express'
import suma from '../calculadora'
const router = Router();

//Routes
//GET: Obtener
router.get('/', function(){
    document.write(suma.suma(1,2));
}); //Obtener peliculas