import React from "react"
import {Link} from "react-router-dom"


const detail = (pokemon) => {
 
 console.log(pokemon)
    return(
        <div>
            <h2>Mehr Info über dein Pokemon</h2>

            <Link to={"../"} className="zurück" >Hauptmenü</Link>
            <hr></hr>
            <Link to={"../auswahl/:id"} className="zurück" >Zurück</Link>
        </div>
    )
}

export default detail