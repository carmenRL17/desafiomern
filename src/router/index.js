 import { render } from "../utils/render.js";
 import { paginaDetalle, inicializarPagina } from "../paginas/pagina_detalle.js";
 import { paginaHome, inicializarPaginaHome } from "../paginas/pagina_home.js";


 export const routerFunction = (location) =>{
    if(/#_detalle\/[0-9]+/.test(location)){
        //render o pinta la pagina de pais.
        
        render(paginaDetalle, inicializarPagina );
    }else{
        //renderea la pagina home por defecto.
        console.log("renderando pagina home")
        render(paginaHome, inicializarPaginaHome);
    }

    
}
export const navegar = (uri) =>{
    location.hash = uri;
}
