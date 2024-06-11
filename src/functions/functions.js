function embaralharArray(array){
    itensRestantes = length(array)

    while(itensRestantes > 0){
        indiceAleatorio = Math.floor(Math.random() * itensRestantes--)

        aux = array[indiceAleatorio]
        array[indiceAleatorio] = array[itensRestantes]
        array[itensRestantes] = aux
    }

    return array
}

function naipesEmbaralhados() {
    naipes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    
    embaralharArray(naipes)

    return naipes
}