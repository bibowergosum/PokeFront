import React from "react"
import {Link} from "react-router-dom"


const arena = (pokemon) => {
 
 
    return(
        <div>
            <h2>Hier kämpfen die Pokemon</h2>
            <Link to={"../auswahl"} className="zurück" >Neu wählen</Link>
            <hr></hr>
            <Link to={"../"} className="zurück" >Hauptmenü</Link>

 <div class="container">
      <div class="player">
        <img src="http://placehold.it/450x350" />
        <p>Pokemon Name:</p>
        <ul>
          <li>Health:</li>
          <li>Type:</li>
          <li>Attack:</li>
          <li>Defense:</li>
        </ul>
      </div>
      <div class="player">
        <img src="http://placehold.it/450x350" />
        <p>Pokemon Name:</p>
        <ul>
          <li>Health:</li>
          <li>Type:</li>
          <li>Attack:</li>
          <li>Defense:</li>
        </ul>
      </div>
    </div>



        </div>
        
    )
}

export default arena