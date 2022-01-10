import axios from "axios";
import React, {useEffect, useState} from "react"
import {Link, useParams} from "react-router-dom"


const Arena = ({selectPokemon}) => {
    const id = {selectPokemon} 
    const [kampfPokemon, setKampfPokemon] = useState();

    useEffect(() => {
       const fetchData = async() => {
        await axios.get (`https://pokedex1234.herokuapp.com/pokemon/${parseInt(id.selectPokemon)}`)
        .then((res) => setKampfPokemon(res.data))
        .catch((err) => console.log(err));
       }
       fetchData();
      }, []);
//  console.log(selectPokemon)
//  console.log(kampfPokemon)

    return(
        <>
        {kampfPokemon ? (<div className="App">
        <h2></h2>      
              
           
      </div>) : ("Loading...")}
      </>
    )
}

export default Arena