class Jogador{
    constructor(id, pontuacao){
        this.id = id
        this.pontuacao = pontuacao
    }

    somarPontos(pontos){
        this.pontuacao += pontos
    }

    zerarPontuacao(){
        this.pontuacao = 0
    }
}