export default class Jogador{
    constructor(id, pontuacao){
        this.id = id
        this.pontuacao = pontuacao
        this.atualizarPontuacaoNaTela = undefined
    }

    somarPontos(pontos){
        this.pontuacao += pontos

        if (this.atualizarPontuacaoNaTela != undefined){
            this.atualizarPontuacaoNaTela(this.pontuacao)
        }
    }

    zerarPontuacao(){
        this.pontuacao = 0
    }
}