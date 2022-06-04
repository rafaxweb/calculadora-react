import "../stylesheets/boton.css"

function BotonEvaluar({ clase, children, funcionClick, input }) {
    return (
    <button 
    className={`boton ${clase}`.trim()}
    onClick={() => funcionClick(input)}
    >{children}</button>
    )
}

export default BotonEvaluar;