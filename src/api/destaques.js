import axios from 'axios';

//Constante para definicao dos filmes que estarão nos destaques.
const indices = [8, 140, 249];  



//obterDestaques usa a constante e busca na lista de filmes se o indice for valido
async function obterDestaques() {
    try {
        
        const response = await axios.get('https://movies.slideworks.cc/movies?limit=250');
        const filmes = response.data.data; 

        
        const filmesDestaque = indices
            .filter(indice => indice < filmes.length) 
            .map(indice => filmes[indice]);

        return filmesDestaque;

    } catch (error) {
        console.error("Erro ao obter filmes:", error);
        return [];
    }
}

export default obterDestaques;