function embaralharArray(array){
    let itensRestantes = array.length

    while(itensRestantes > 0){
        let indiceAleatorio = Math.floor(Math.random() * itensRestantes--)

        let aux = array[indiceAleatorio]
        array[indiceAleatorio] = array[itensRestantes]
        array[itensRestantes] = aux
    }

    return array
}

export default embaralharArray