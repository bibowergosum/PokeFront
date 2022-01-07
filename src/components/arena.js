import React, {useEffect, useState} from "react"
import {Link} from "react-router-dom"


const Arena = ({selectPokemon}) => {
    const [kampfPokemon, setKampfPokemon] = useState;
    useEffect(() => {
        fetch ("https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/pokedex.json")
          .then((response) => response.json())
          .then((data) => setKampfPokemon(data))
          .catch((err) => console.log(err));
      }, []);
 console.log(selectPokemon)
 
    return(
        <div>
            <h2>Hier kämpfen die Pokemon</h2>
           
        </div>
    )
}

export default Arena