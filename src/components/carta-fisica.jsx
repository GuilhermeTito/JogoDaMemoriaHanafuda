import '../styles/carta.css'

export default function CartaFisica(props){
    return (
        <>            
            <img id={'carta' + props.id} className='carta' src={props.src} alt="carta"/>
        </>
    )
}