import React from "react";
import "../stylesheets/pantalla.css"

function Pantalla({ input }) {
    return (
        <div className="pantalla">
            <p>{input}</p>
        </div>
    )
}

export default Pantalla;