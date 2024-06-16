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

        this.cartas = embaralharArray(this.cartas)
    }

    criarParDeCartas(naipe, tipo, valor){
        for(let i = 0; i < 2; i++){
            this.cartas.push(new CartaLogica(this.idProximaCarta, naipe, tipo, valor))
            this.idProximaCarta++
        }        
    }

    escolherCarta(carta) {
        if (carta.virada || this.estaTravado){
            return
        }

        carta.virar()
        
        if (this.primeiraCarta == null){
            this.primeiraCarta = carta
            return
        }
        
        this.segundaCarta = carta
        this.estaTravado = true
               
        if (!this.compararCartas()){
            setTimeout(() => this.desvirarCartas(), 1000);
            return
        }

        this.jogadorAtual.somarPontos(this.primeiraCarta.valor + this.segundaCarta.valor)
        this.limparSelecao()
    }

    compararCartas(){
        if (this.primeiraCarta == null || this.segundaCarta == null){
            return false
        }        

        if(this.primeiraCarta.naipe != this.segundaCarta.naipe || this.primeiraCarta.tipo != this.segundaCarta.tipo){
            return false
        }

        return true
    }

    desvirarCartas(){
        this.primeiraCarta.virar()
        this.segundaCarta.virar()
        this.limparSelecao()
    }

    limparSelecao(){
        this.primeiraCarta = null
        this.segundaCarta = null
        this.estaTravado = false
    }
}

let jogo = new Jogo()

export default jogo