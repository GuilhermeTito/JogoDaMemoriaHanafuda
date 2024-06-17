import '../styles/tela-jogo.css'
import jogo from '../classes/jogo.js'
import GradeDeCartas from '../components/grade-de-cartas'
import CartaFisica from '../components/carta-fisica.jsx'
import MenuLateralJogo from '../components/menu-lateral-jogo.jsx'

export default function TelaJogo(){
    jogo.iniciarJogo()
    
    return(
        <div id="tela-jogo">
            <MenuLateralJogo id='menu-lateral-1'/><GradeDeCartas id="grade-1">
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