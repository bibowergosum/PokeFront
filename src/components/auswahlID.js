import React from "react"
import {Link} from "react-router-dom"


const auswahlID = (pokemon) => {
 
 console.log(pokemon)
    return(
        <div>
            <h2>Übersicht von deinem Pokemon</h2>

            <Link to={"detail"} className="zurück" >info</Link>
            <hr></hr>
            <Link to={"../auswahl"} className="zurück" >Zurück</Link>
        </div>
    )
}

export default auswahlID