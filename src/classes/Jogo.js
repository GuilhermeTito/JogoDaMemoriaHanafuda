import embaralharArray from '../functions/utilitarios.js'
import CartaLogica from './carta-logica.js'
import Jogador from './jogador.js'

class Jogo {
    constructor(){
        this.primeiraCarta = null
        this.segundaCarta = null
        this.estaTravado = false
        this.cartas = []
        this.idProximaCarta = 0
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
        this.idProximaCarta = 0
        let i

        let naipesHikari = embaralharArray(['janeiro', 'marco', 'agosto', 'novembro', 'dezembro'])
        let naipesTane = embaralharArray(['fevereiro', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro'])
        let naipesTanzaku = embaralharArray(['janeiro', 'fevereiro', 'marco', 'abril', 'maio', 'junho', 'julho', 'setembro', 'outubro', 'novembro'])
        let naipesKasu = embaralharArray(['janeiro', 'fevereiro', 'marco', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'])

        this.criarParDeCartas(naipesHikari[0], 'hikari', 20)

        for(i = 0; i < 2; i++){
            this.criarParDeCartas(naipesTane[i], 'tane', 10)
        }

        for(i = 0; i < 4; i++){
            this.criarParDeCartas(naipesTanzaku[i], 'tanzaku', 5)
        }

        for(i = 0; i < 5; i++){
            this.criarParDeCartas(naipesKasu[i], 'kasu', 1)
        }
    }

    criarParDeCartas(naipe, tipo, valor){
        for(let i = 0; i < 2; i++){
            this.cartas.push(new CartaLogica(this.idProximaCarta, naipe, tipo, valor))
            this.idProximaCarta++
        }        
    }

    embaralharCartas(){
        this.cartas = embaralharArray(this.cartas)
    }
}

let jogo = new Jogo()

export default jogo