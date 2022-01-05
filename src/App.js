import './index.css';
import {Routes, Route} from "react-router-dom";
import Home from './components/home.js';
import Auswahl from './components/auswahl.js';
import Arena from './components/arena.js'
import Highscore from './components/highscore';
import {useState, useEffect} from "react";

function App() {
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    fetch ("https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/pokedex.json")
      .then((response) => response.json())
      .then((data) => setPokemon(data))
      .catch((err) => console.log(err));
  }, []);
   console.log(pokemon)
  return (
     <>
     {pokemon ? (<div className="App">
    <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="auswahl" element={<Auswahl pokemon={pokemon} />} /> 
          <Route path="auswahl/arena" element={<Arena pokemon={pokemon} />} /> 
          <Route path="highscore" element={<Highscore pokemon={pokemon} />} /> 
      </Routes>
   </div>) : ("Loading...")}
   </>
  );
}

export default App;


//         <Route path="products" element={<Products autos={autos}/>} />
  //         <Route path="auto/:id" element={<Details autos={autos}/>} />
    //  <div>{pokemon[0].name.english}</div>