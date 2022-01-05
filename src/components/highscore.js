import React from "react"
import {Link} from "react-router-dom"


const highscore = (pokemon) => {
 
 
    return(
        <div>
            <h2>Hier kommt der Highscore rein</h2>
            <Link to={"../"} className="zurück" >Zurück</Link>
        </div>
    )
}

export default highscore