import '../styles/grade-de-cartas.css'

export default function GradeDeCartas(props){
    return(
        <div id={props.id}>
            {props.children}
        </div>
    )
}