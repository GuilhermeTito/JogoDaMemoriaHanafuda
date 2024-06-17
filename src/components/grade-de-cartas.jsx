import '../styles/grade-de-cartas.css'

export default function GradeDeCartas(props){
    return(
        <div className='container-grade'>
            <div id={props.id} className='grade-de-cartas'>
                {props.children}
            </div>
        </div>
    )
}