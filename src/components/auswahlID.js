import React from "react"
import { Link, useParams, Outlet } from "react-router-dom"


const AuswahlID = ({pokemon}) => {
    const { id } = useParams();
    const poke = pokemon && pokemon.find((element) => element.id === parseInt(id, 10))
   
    return(
        <>
        {poke ? ( 
        
        <div className='AuswahlID'>
            <h2>Übersicht von deinem Pokemon</h2>
            <h2>{poke.name.english}</h2>
            <p>Typ: {poke.type[0]} {poke.type[1]} </p>
            <p>ID: {poke.id} </p>
            <Outlet />
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke.id}.png`} className='pokeImage' alt="Ausgewältes Pokemon"></img>
              <br></br><br></br>  
            <div><Link to={`../auswahl/${id}/${id}`} 
            className="zurück" >Info</Link>
            <br></br><br></br>
            <Link to={"../auswahl"} className="zurück" >Zurück</Link></div>
        </div>):' ...loading'}
        </>
    )
}



export default AuswahlID