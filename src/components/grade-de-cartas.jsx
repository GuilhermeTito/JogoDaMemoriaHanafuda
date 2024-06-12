import jogo from '../classes/Jogo.js'
import '../styles/grade-de-cartas.css'
import { createElement } from 'react'
import CartaFisica from './carta-fisica.jsx'

export default function GradeDeCartas(){
    
    let listaDeCartas = []
    jogo.iniciarJogo()

    for(let i = 0; i < jogo.cartas.length; i++){
        let fonte = "../../assets/cartas/" + jogo.cartas[i].naipe + '_' + jogo.cartas[i].tipo + '.svg'
        
        console.log(fonte)

        listaDeCartas.push(createElement(CartaFisica, {id: jogo.cartas[i].id, src: fonte, key:jogo.cartas[i].id}))
    }

    return(
        <div id="grade-de-cartas">
            {listaDeCartas}      
        </div>
    )
}