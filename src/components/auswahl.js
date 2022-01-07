import React, {useState} from "react";
import {Link, useParams, Outlet} from "react-router-dom";
import Arena from './arena.js';


const Auswahl = ({pokemon}) => {
   const[selectPokemon, setSelectPokemon] = useState();

    function handleClick(e) {
        e.preventDefault();
        setSelectPokemon  (e.target.value)
      }

    return (
        <>
        {selectPokemon ? <Arena selectPokemon={selectPokemon}/> : (<div>
            <h2>Wähle dein Pokemon</h2>
            <Link to={"../"} className="zurück" >Zurück</Link>
        {pokemon.map((poke, index) => (        
            <div className='post, container' key={index}>    
            <h2 className='title'>{poke.name.english}</h2>           
            <button value={poke.id} onClick={handleClick} type="button">Auswählen</button>
            <Link to={`/auswahl/${poke.id}`} className="pupi" >DETAILS</Link>    
            </div>       
        ))}   
    </div>)} 
    </>
    )
}

export default Auswahl