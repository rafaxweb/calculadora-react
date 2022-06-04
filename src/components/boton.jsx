import "../stylesheets/boton.css"

function Boton({ clase, children, funcionClick }) {
    return (
    <button 
    className={`boton ${clase}`.trim()}
    onClick={() => funcionClick(children)}
    >{children}</button>
    )
}

export default Boton;