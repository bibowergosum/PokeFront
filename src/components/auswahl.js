import React from "react"
import {Link} from "react-router-dom"


const auswahl = ({pokemon}) => {
   
 
    return(
        <div>
            <h2>Wähle dein Pokemon</h2>
        {pokemon.map((poke, index) => (        
            <div className='post, container' key={index}>    
            <h2 className='title'>{poke.name.english}</h2>          
            <p>{poke.type[0]} {poke.type[1]}</p>
            {console.log(poke.type)} 
            <Link to={`/auswahl/${poke.id}`} className="pupi" >DETAILS</Link>
            
            </div>
            
        ))}
        
    </div>
        // <div>
        //     
        //     
        //     <Link to={"arena"} className="zurück" >Fight now</Link>
        //     <hr></hr>
        //     <Link to={"../"} className="zurück" >Zurück</Link>
        // </div>
    )
}

export default auswahl