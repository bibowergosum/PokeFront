import React from "react"
import {Link, useParams, Outlet} from "react-router-dom"


const Auswahl = ({pokemon}) => {
   
    return(
        <div>
            <h2>Wähle dein Pokemon</h2>
            <Link to={"arena"} className="zurück" >Fight now</Link>
            <br></br>
            <Link to={"../"} className="zurück" >Zurück</Link>
        {pokemon.map((poke, index) => (        
            <div className='post, container' key={index}>    
            <h2 className='title'>{poke.name.english}</h2>          
            <p>{poke.type[0]} {poke.type[1]}</p> 
            <Link to={`/auswahl/${poke.id}`} className="pupi" >DETAILS</Link>    
            </div>       
        ))}     
    </div>
    )
}

export default Auswahl