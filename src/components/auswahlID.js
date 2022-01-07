import React from "react"
import { Link, useParams, Outlet } from "react-router-dom"


const AuswahlID = ({pokemon}) => {
    const { id } = useParams();
    const poke = pokemon && pokemon.find((element) => element.id == id)
    console.log(id)
    return(
        <>
        {poke ? ( <div>
            <h2>Übersicht von deinem Pokemon</h2>
            <h2>{poke.name.english}</h2>
            <p>{poke.type[0]} {poke.type[1]} </p>
            <Outlet />
            <Link to={`../auswahl/${id}/${id}`} className="zurück" >info</Link>
            <hr></hr>
            <Link to={"../auswahl"} className="zurück" >Zurück</Link>
        </div>):' ...loading'}
        </>
    )
}



export default AuswahlID