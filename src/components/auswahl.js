import React from "react"
import {Link} from "react-router-dom"


const auswahl = ({pokemon}) => {
 
 console.log(pokemon)
    return(
        <div>
            <h2>Wähle dein Pokemon</h2>
            <Link to={"../auswahl/:id"} className="zurück" >Detail</Link>
            <Link to={"arena"} className="zurück" >Fight now</Link>
            <hr></hr>
            <Link to={"../"} className="zurück" >Zurück</Link>
        </div>
    )
}

export default auswahl