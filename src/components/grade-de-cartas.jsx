import jogo from '../classes/jogo.js'
import '../styles/grade-de-cartas.css'
import CartaFisica from './carta-fisica.jsx'

export default function GradeDeCartas(){
    jogo.iniciarJogo()

    return(
        <div id="grade-de-cartas">
            {jogo.cartas.map((carta, indice) => (
                <CartaFisica
                    key={indice}
                    carta={carta}
                ></CartaFisica>
            ))}
        </div>
    )
}