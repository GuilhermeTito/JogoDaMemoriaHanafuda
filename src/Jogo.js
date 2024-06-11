import './classes/Carta.js'
import './functions/functions.js'
import './classes/Jogador.js'

class Jogo {
    constructor(){
        this.primeiraCarta = null
        this.primeiraCarta = null
        this.segundaCarta = null
        this.trava = false
        this.cartas = []
        this.jogadorUm = new Jogador(1, 0)
        this.jogadorDois = new Jogador(2, 0)
        this.jogadorAtual = null
    }

    iniciarJogo(){
        this.primeiraCarta = null
        this.primeiraCarta = null
        this.segundaCarta = null
        this.trava = false
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

        idAtual = 1

        naipes = naipesEmbaralhados()

        for(i = 0; i < 1; i++){
            this.cartas.push(new Hikari(idAtual, naipes[i]))
            idAtual++
        }

        for(i = 0; i < 4; i++){
            this.cartas.push(new Tane(idAtual, naipes[i]))
            idAtual++
        }

        for(i = 0; i < 8; i++){
            this.cartas.push(new Tanzaku(idAtual, naipes[i]))
            idAtual++
        }

        for(i = 0; i < 10; i++){
            this.cartas.push(new Kasu(idAtual, naipes[i]))
            idAtual++
        }
    }

    embaralharCartas(){
        this.cartas = embaralharArray(this.cartas)
    }
}

let jogo = new Jogo()