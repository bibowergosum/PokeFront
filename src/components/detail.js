import React from "react"
import {Link, useParams} from "react-router-dom"



const Detail = ({pokemon}) => {
    const { id } = useParams();
    const pokeDetail = pokemon.find((element) => element.id === parseInt(id, 10))
 
    return(
         <>
         {pokeDetail ? ( <div className='detail'>
             <h2>Mehr Infos über dein Pokemon</h2>
             <h2>{pokeDetail.name.english}</h2>
             <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeDetail.id}.png`} className='pokeImage'></img>
             <p>{pokeDetail.type[0]} {pokeDetail.type[1]} </p>
             <p>HP: {pokeDetail.base.HP}</p>
             <p>Attack: {pokeDetail.base.Attack}</p>
             <p>Defense: {pokeDetail.base.Defense}</p>
             <p>Sp. Attack: {pokeDetail.base[ 'Sp. Attack' ]}</p>    
             <p>Sp. Defense: {pokeDetail.base[ 'Sp. Defense' ]}</p>
             <p>Speed: {pokeDetail.base.Speed}</p>
             <br></br>
             <Link to={`../auswahl/${id}`} className="zurück" >Zurück</Link>
             <br></br><br></br>
             <Link to={"../"} className="zurück" >Hauptmenü</Link>
         </div>):' ...loading'}
         </>
    )
}

export default Detail