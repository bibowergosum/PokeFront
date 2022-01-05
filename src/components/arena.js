import React from "react"
import {Link} from "react-router-dom"


const arena = (pokemon) => {
 
 
    return(
        <div>
            <h2>Hier kämpfen die Pokemon</h2>
            <Link to={"../auswahl"} className="zurück" >Neu wählen</Link>
            <hr></hr>
            <Link to={"../"} className="zurück" >Hauptmenü</Link>
        </div>
    )
}

export default arena