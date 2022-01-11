import axios from "axios";
import React, {useEffect, useState} from "react"
import {Link, useParams} from "react-router-dom"


const Arena = ({selectPokemon}) => {
<<<<<<< HEAD
    const [kampfPokemon, setKampfPokemon] = useState();
=======
    const id = {selectPokemon} 
    const [kampfPokemon, setKampfPokemon] = useState();
    const [randomPokemon, setRandomPokemon] = useState();

    //Zufallsgenerator für Zahlen zwischen 1 und 809
    var getRandomPokemon = Math.round(Math.random() * (809 - 1)) + 1;

    //Fetch für gewähltes Pokemon
>>>>>>> 49c73422024d13ea5656228df119982d9512b676
    useEffect(() => {
       const fetchData = async() => {
        await axios.get (`https://pokedex1234.herokuapp.com/pokemon/${parseInt(id.selectPokemon)}`)
        .then((res) => setKampfPokemon(res.data))
        .catch((err) => console.log(err));
       }
       fetchData();
      }, []);

      //Fetch für zufälliges Pokemon
      useEffect(() => {
         const fetchData = async() => {
          await axios.get (`https://pokedex1234.herokuapp.com/pokemon/${getRandomPokemon}`)
          .then((res) => setRandomPokemon(res.data))
          .catch((err) => console.log(err));
         }
         fetchData();
        }, []);


    return(
        <>
        {kampfPokemon ? (<div className="App">
            {/* //Deine Pokemon */}
             <h2>{kampfPokemon.name.english}</h2>
             <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${kampfPokemon.id}.png`} className='pokeImage'></img>
             <p>{kampfPokemon.type[0]} {kampfPokemon.type[1]} </p>
             <p>HP: {kampfPokemon.base.HP}</p>
             <p>Attack: {kampfPokemon.base.Attack}</p>
             <p>Defense: {kampfPokemon.base.Defense}</p>  

              {/* Zufälliges Pokemon */}
             <h2>{randomPokemon.name.english}</h2>
             <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${randomPokemon.id}.png`} className='pokeImage'></img>
             <p>{randomPokemon.type[0]} {randomPokemon.type[1]} </p>
             <p>HP: {randomPokemon.base.HP}</p>
             <p>Attack: {randomPokemon.base.Attack}</p>
             <p>Defense: {randomPokemon.base.Defense}</p>  




             <Link to={"../"} className="zurück" >Hauptmenü</Link>

      </div>) : ("Loading...")}
      </>
    )
}

export default Arena