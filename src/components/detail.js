import React from "react"
import {Link, useParams} from "react-router-dom"


const Detail = (pokemon) => {
    // const { info } = useParams();
    
    // console.log(pokemon.find((element) => element.info == info))
 
    return(
        // <>
        // {poke ? ( <div>
        //     <h2>Mehr Info über dein Pokemon</h2>
        //     <h2>{poke.name.english}</h2>
        //     <p>{poke.type[0]} {poke.type[1]} </p>
        //     <p>HP: {poke.base.HP}</p>
        //     <p>Attack: {poke.base.Attack}</p>
        //     <p>Defense: {poke.base.Defense}</p>
        //     <p>Sp. Attack: {poke.base.Speed}</p>    
        //     <p>Sp. Defense: {poke.base.Speed}</p>
        //     <p>Speed: {poke.base.Speed}</p>
        //     <Link to={"../auswahl/:id"} className="zurück" >Zurück</Link>
        //     <hr></hr>
        //     <Link to={"../"} className="zurück" >Hauptmenü</Link>
        // </div>):' ...loading'}
        // </>
    <div>
        <Link to={"../auswahl/:id"} className="zurück" >Zurück</Link>
        <hr></hr>
        <Link to={"../"} className="zurück" >Hauptmenü</Link>
    </div>
    )
}

export default Detail