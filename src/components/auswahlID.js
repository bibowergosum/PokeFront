import React from "react"
import {Link, useParams} from "react-router-dom"


const AuswahlID = ({pokemon}) => {
    const { id } = useParams();
    const poke = pokemon.find((element) => element.id == id)
    console.log()
    return(
        <>
        {poke ? ( <div>
            <h2>Übersicht von deinem Pokemon</h2>
            <h2>{poke.name.english}</h2>
            <p>{poke.type[0]} {poke.type[1]} </p>
            <p>HP: {poke.base.HP}</p>
            <p>Attack: {poke.base.Attack}</p>
            <p>Defense: {poke.base.Defense}</p>
            <p>Sp. Attack: {poke.base.Speed}</p>    
            <p>Sp. Defense: {poke.base.Speed}</p>
            <p>Speed: {poke.base.Speed}</p>
            <Link to={`../auswahl/:id/:info`} className="zurück" >info</Link>
            <hr></hr>
            <Link to={"../auswahl"} className="zurück" >Zurück</Link>
        </div>):' ...loading'}
        </>
    )
}

export default AuswahlID