import React, {useState} from "react";
import {Link} from "react-router-dom";
import Arena from './arena.js';


const Auswahl = ({pokemon}) => {
   const[selectPokemon, setSelectPokemon] = useState();
   const [input, setInput] = useState("")

    function handleClick(e) {
        setSelectPokemon(e.target.id)
      }

      const handleSubmit = (event) => {
        event.preventDefault()
        setInput(event.target.input.value)
        event.target.input.value="";
    }

    return (
        <>
        {selectPokemon ? <Arena selectPokemon={selectPokemon}/> : (<div>
            <h2>Wähle dein Pokemon</h2>
            <Link to={"../"} className="auswahlzurück" >Zurück</Link>
        <form onSubmit={handleSubmit}>
            <input id={input} required name="search" type="text" placeholder="Pokemon suchen"/>
            <button id="searchbutton">Suchen</button>
        </form>
        <br></br>
        <div className="select">
        {pokemon.map((poke, index) => (        
            <div className='pokeselect' key={index}>    
            <h2 className='title'>{poke.name.english}</h2> 
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke.id}.png`}  id={poke.id} onClick={handleClick} alt="Alle Pokemon" className='pokeSelectImage' />          
            <Link to={`/auswahl/${poke.id}`} className="pupi2" >DETAILS</Link> 
                
            </div>       
        ))}   
        </div>
    </div>)} 
    </>
    )
}

export default Auswahl