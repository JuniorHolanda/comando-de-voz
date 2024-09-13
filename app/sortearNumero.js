// altera o menor valor do chute
const menorValor = 1;
// altera o maior valor do chute
const maiorValor = 1000;

// recebe e invoca a função que gera números pseudoaleatórios
const numeroSecreto = gerarNumeroAleatorio();

// gera números pseudo aleatórios
function gerarNumeroAleatorio() {
    return parseInt(Math.random() * maiorValor + 1);
}

console.log(numeroSecreto);

// referencia o elemento html de menor valor
const elementoMenorValor = document.getElementById('menor-valor');
// altera o html do menor valor
elementoMenorValor.innerHTML = menorValor;
// referencia o elemento html de maior valor
const elementoMaiorrValor = document.getElementById('maior-valor');
// altera o html do maior valor
elementoMaiorrValor.innerHTML = maiorValor;