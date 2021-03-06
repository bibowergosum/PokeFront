import axios from "axios";
import React, {useEffect, useState} from "react"
import {Link} from "react-router-dom"


const Arena = ({selectPokemon}) => {
    const id = {selectPokemon} 
    const [kampfPokemon, setKampfPokemon] = useState();
    const [randomPokemon, setRandomPokemon] = useState();


    
    
    //Fetch für gewähltes Pokemon
    useEffect(() => {
        const fetchData = async() => {
            await axios.get (`https://pokedex1234.herokuapp.com/pokemon/${id.selectPokemon}`)
            .then((res) => setKampfPokemon(res.data))
            .catch((err) => console.log(err));
        }
        fetchData();
    }, [id.selectPokemon]);
    
    //Fetch für zufälliges Pokemon
    useEffect(() => {
            // Zufallsgenerator für Zahlen zwischen 1 und 809
        const randomPokemonID =  Math.round(1 * Math.random() * (809 - 1)) + 1
        
        const fetchData = async() => {
            await axios.get (`https://pokedex1234.herokuapp.com/pokemon/${randomPokemonID}`)
            .then((res) => setRandomPokemon(res.data))
            .catch((err) => console.log(err));
        }
         fetchData();
        }, []);

const fight = () => {
if (kampfPokemon.base.HP > randomPokemon.base.HP) {
    alert("Dein Pokemon hat gewonnen!");
  
}
else if (kampfPokemon.base.HP < randomPokemon.base.HP) {
    alert ("Dein Pokemon hat verloren und ist jetzt tot.");
}
else if (kampfPokemon.base.HP === randomPokemon.base.HP) {
    alert ("Unentschieden"); 
}
window.location.reload();
};

    return(
        <>

        {(kampfPokemon && randomPokemon) ? (<div className="App">

        <Link to={"../"} className="zurück" >Hauptmenü</Link>
            {/* //Deine Pokemon */}
           <div className='pokeselect2'>
             <h2>{kampfPokemon.name.english}</h2><br></br>
             <img  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${kampfPokemon.id}.png`} className='pokeImage' alt="Ausgewähltes Pokemon"></img>
             <div><p>{kampfPokemon.type[0]} {kampfPokemon.type[1]} </p> <br></br>
             <p>HP: {kampfPokemon.base.HP}</p>
             <p>Attack: {kampfPokemon.base.Attack}</p>
             <p>Defense: {kampfPokemon.base.Defense}</p> 
             </div>
            
            <h3 className="pupili" onClick={fight}>VS.</h3>
       
              {/* Zufälliges Pokemon */}
             <div><p>{randomPokemon.type[0]} {randomPokemon.type[1]} </p> <br></br>
             <p>HP: {randomPokemon.base.HP}</p>
             <p>Attack: {randomPokemon.base.Attack}</p>
             <p>Defense: {randomPokemon.base.Defense}</p>  
             </div>
             <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${randomPokemon.id}.png`} className='pokeImage' alt="Zufälliges Pokemon"></img>
             <h2>{randomPokemon.name.english}</h2>
             </div>


      </div>) : ("Loading...")}
      </>
    )
}

export default Arena