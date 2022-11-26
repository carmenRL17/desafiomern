import {getPaises} from '../utils/paisesAPI.js'
import { inicializarPagina } from './pagina_detalle.js'

export const paginaHome = `
    <div class="filter-content">
        <form>
            <input type="text" placeholder="Buscar Pais" id="buscarInput" />
        </form>
        <div>
            <select class="regiones" name="regiones">
                <option value="Todas">Region</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas </option>
                <option value="Asia">Asia </option>
                <option value="Europe">Europe </option>
                <option value="Oceania">Oceania </option>
            </select>
        </div>
    </div>
    <div id="contenido" class="container"> </div>
`

export const inicializarPaginaHome = ()=>{
    console.log("inicializando pagina home")
    const input = document.querySelector('#buscarInput')
    const selecElement = document.querySelector('.regiones')
  
   
    const mostrarData = (data) => {
        let body= '';
        if(data.length > 0){
            for(let i=0; i<data.length; i++){
                   
                body+=`
                <div id="card" class ="paises">
                    <img src="${data[i].flags.png}">
                    <h4>Nombre:${data[i].name}</h4>                    
                    <h4>Poblacion:${data[i].population}</h4>                    
                    <h4>Region:${data[i].region}</h4>                    
                    <h4>Capital:${data[i].capital}</h4>                    
                    <a href="/#_detalle/${i}"}>Leer mas</a>
                </div>
                `
            }
        }else {
            body += 'no se encontraron datos';
        }
        document.getElementById('contenido').innerHTML = body
    }

    input.addEventListener('keyup', async (event) =>{
        const data = await getPaises();
        const paisesFiltrados = data.filter(data => `${data.name.toLowerCase()}`.includes(input.value.toLowerCase()))
        mostrarData(paisesFiltrados);
    })
    selecElement.addEventListener('change', async(evento)=>{
        const data = await getPaises();
        const region = evento.target.value;
        if(region == "Todas"){
            mostrarData(data)
        }else{
            const result = data.filter(data => `${data.region}`.includes(region));
            mostrarData(result);
        }
        
    })
    getPaises().then((data)=>{
        mostrarData(data);
    })

}

