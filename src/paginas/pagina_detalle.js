import { getPaises } from "../utils/paisesAPI.js";

export const paginaDetalle = ` 

<div id="contenidoDetalle" class="container"></div>
<p><a href="/#_home" class ="atras">Atras</a></p>  
`;
export const inicializarPagina = async () => {
  const [, indice] = location.hash.split("/");
  const paises = await getPaises();
  mostrarPais(paises[indice]);



  function mostrarPais(pais){
    let body = "";
    body += `
        <div id="card" class ="paises">
            <img src="${pais.flags.png}">
            <h4>Nombre:${pais.name}</h4>                    
            <h4>Poblacion:${pais.population}</h4>                    
            <h4>Region:${pais.region}</h4>                    
            <h4>Capital:${pais.capital}</h4> 
                             
          
        </div>
    `;
    document.getElementById('contenidoDetalle').innerHTML=body;
  };
};
