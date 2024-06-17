import '../styles/menu-lateral-jogo.css'
import jogo from '../classes/jogo'
import { useState } from 'react'

export default function MenuLateralJogo(props){
    const [pontuacoJogadorUm, setPontuacaoJogadorUm] = useState(jogo.jogadorUm.pontuacao)
    const [pontuacoJogadorDois, setPontuacaoJogadorDois] = useState(jogo.jogadorDois.pontuacao)
    const [idJogadorAtual, setJogadorAtual] = useState(jogo.idJogadorAtual)

    jogo.jogadorUm.atualizarPontuacaoNaTela = setPontuacaoJogadorUm
    jogo.jogadorDois.atualizarPontuacaoNaTela = setPontuacaoJogadorDois
    jogo.atualizarJogadorAtualNaTela = setJogadorAtual

    return (
        <div id={props.id} className="menu-lateral-jogo">
            <h2>Pontuação</h2>
            <p>Jogador 1: {pontuacoJogadorUm}</p>
            <p>Jogador 2: {pontuacoJogadorDois}</p>
            <h2>Vez de:</h2>
            <p>Jogador {idJogadorAtual}</p>
            <h2>Opções</h2>
            <button type='button'>Reiniciar Jogo</button>
        </div>

    )
}