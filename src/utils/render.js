export const render = (element, inicializarPagina) =>{
    const root = document.getElementById('root');
    root.innerHTML = element;
    console.log("html caragdo")
    inicializarPagina();
}


