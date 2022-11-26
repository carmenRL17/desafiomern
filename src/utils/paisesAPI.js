let cache = null;

export async function getPaises() {
    if (!cache) {
      const response = await fetch("https://restcountries.com/v2/all");
      const paises = await response.json();
      cache = paises; 
      
    }

    return cache   
}