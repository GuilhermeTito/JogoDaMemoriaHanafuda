import { useState } from 'react'
import jogo from '../classes/jogo'
import '../styles/carta.css'

export default function CartaFisica(props){
    const [virada, setVirada] = useState(props.carta.virada)
    
    return (
        <div
            id={`carta${props.carta.id}`}    
            className={`carta ${virada ? "virada" : ""}`} 
            onClick={() => {
                jogo.escolherCarta(props.carta)
                setVirada(props.carta.virada)
                jogo.compararCartas()
            }}
        >
            <div className='frente'>
                <img className='imagem-carta' src={`../../assets/cartas/${props.carta.naipe}_${props.carta.tipo}.svg`} alt="carta"/>
            </div>
            <div className='verso'>
                <img className='imagem-carta' src='../../assets/cartas/verso.svg' alt="verso"/>
            </div>
        </div>
    )
}