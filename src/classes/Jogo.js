import embaralharArray from '../functions/utilitarios.js'
import CartaLogica from './carta-logica.js'
import Jogador from './Jogador.js'

class Jogo {
    constructor(){
        this.primeiraCarta = null
        this.segundaCarta = null
        this.estaTravado = false
        this.cartas = []
        this.jogadorUm = new Jogador(1, 0)
        this.jogadorDois = new Jogador(2, 0)
        this.jogadorAtual = this.jogadorUm
    }

    iniciarJogo(){
        this.primeiraCarta = null
        this.segundaCarta = null
        this.estaTravado = false
        this.criarCartas()
        
        if(Math.floor(Math.random() * 10) % 2 == 0){
            this.jogadorAtual = this.jogadorUm
        }else{
            this.jogadorAtual = this.jogadorDois
        }
    }

    escolherCarta(id) {
        let carta = this.cartas.find((carta) => carta.id === id)
        
        if (carta.virada || trava){
            return false
        }

        if (this.primeiraCarta == null){
            this.primeiraCarta = carta
            this.primeiraCarta.virada = true
        }else{
            this.segundaCarta = carta
            this.segundaCarta.virada = true
        }

        return true
    }

    compararCartas(){
        if (primeiraCarta == null || segundaCarta == null){
            return false
        }

        if(this.primeiraCarta.naipe != this.segundaCarta.naipe || this.primeiraCarta.tipo != this.segundaCarta.tipo){
            return false
        }

        this.jogadorAtual.somarPontos(this.primeiraCarta.valor + this.segundaCarta.valor)

        return true
    }

    criarCartas(){
        this.cartas = []

        let idAtual = 1

        let naipesHikari = embaralharArray(['janeiro', 'marco', 'agosto', 'novembro', 'dezembro'])
        let naipesTane = embaralharArray(['fevereiro', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro'])
        let naipesTanzaku = embaralharArray(['janeiro', 'fevereiro', 'marco', 'abril', 'maio', 'junho', 'julho', 'setembro', 'outubro', 'novembro'])
        let naipesKasu = embaralharArray(['janeiro', 'fevereiro', 'marco', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'])

        let i = 0

        for(i = 0; i < 2; i++){
            this.cartas.push(new CartaLogica(idAtual, naipesHikari[i], 'hikari', 20))
            idAtual++
        }

        for(i = 0; i < 4; i++){
            this.cartas.push(new CartaLogica(idAtual, naipesTane[i], 'tane', 20))
            idAtual++
        }

        for(i = 0; i < 8; i++){
            this.cartas.push(new CartaLogica(idAtual, naipesTanzaku[i], 'tanzaku', 20))
            idAtual++
        }

        for(i = 0; i < 10; i++){
            this.cartas.push(new CartaLogica(idAtual, naipesKasu[i], 'kasu', 20))
            idAtual++
        }
    }

    embaralharCartas(){
        this.cartas = embaralharArray(this.cartas)
    }
}

let jogo = new Jogo()

export default jogo