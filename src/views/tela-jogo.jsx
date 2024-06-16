import '../styles/tela-jogo.css'
import jogo from '../classes/jogo.js'
import GradeDeCartas from '../components/grade-de-cartas'
import CartaFisica from '../components/carta-fisica.jsx'

export default function TelaJogo(props){
    jogo.iniciarJogo()
    
    return(
        <div id="tela-jogo">
            <GradeDeCartas id="grade-de-cartas">
                {jogo.cartas.map((carta, indice) => (
                    <CartaFisica
                        key={indice}
                        carta={carta}
                    ></CartaFisica>
                ))}
            </GradeDeCartas>
        </div>
    )
}