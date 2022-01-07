import React from "react"
import {Link, useParams} from "react-router-dom"



const Detail = ({pokemon}) => {
    const { id } = useParams();
    const pokeDetail = pokemon.find((element) => element.id == id)
 
    return(
         <>
         {pokeDetail ? ( <div>
             <h2>Mehr Info über dein pokeDetailmon</h2>
             <h2>{pokeDetail.name.english}</h2>
             <p>{pokeDetail.type[0]} {pokeDetail.type[1]} </p>
             <p>HP: {pokeDetail.base.HP}</p>
             <p>Attack: {pokeDetail.base.Attack}</p>
             <p>Defense: {pokeDetail.base.Defense}</p>
             <p>Sp. Attack: {pokeDetail.base[ 'Sp. Attack' ]}</p>    
             <p>Sp. Defense: {pokeDetail.base[ 'Sp. Defense' ]}</p>
             <p>Speed: {pokeDetail.base.Speed}</p>
             <Link to={`../auswahl/${id}`} className="zurück" >Zurück</Link>
             <hr></hr>
             <Link to={"../"} className="zurück" >Hauptmenü</Link>
         </div>):' ...loading'}
         </>
    )
}

export default Detail