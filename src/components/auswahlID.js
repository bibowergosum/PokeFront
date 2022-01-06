import React from "react"
import {Link, useParams} from "react-router-dom"


const auswahlID = ({pokemon}) => {
    const {id} = useParams
    const poke = pokemon.filter((element) => {
        console.log(pokemon.id)
        return element.id === id
    })
    console.log()
    return(
        <div>
            <h2>Übersicht von deinem Pokemon</h2>
            <h2>{poke[0]}</h2>
            <Link to={"detail"} className="zurück" >info</Link>
            <hr></hr>
            <Link to={"../auswahl"} className="zurück" >Zurück</Link>
        </div>
    )
}

export default auswahlID