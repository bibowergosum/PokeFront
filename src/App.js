import './index.css';
import {Routes, Route} from "react-router-dom";
import Home from './components/home.js';
import Auswahl from './components/auswahl.js';
import Arena from './components/arena.js';
import Highscore from './components/highscore';
import AuswahlID from './components/auswahlID';
import Detail from './components/detail';
import {useState, useEffect} from "react";

function App(props) {
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    fetch ("https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/pokedex.json")
      .then((response) => response.json())
      .then((data) => setPokemon(data))
      .catch((err) => console.log(err));
  }, []);

  return (
     <>
     {pokemon ? (<div className="App">
    <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="auswahl" element={<Auswahl pokemon={pokemon} />} />
          <Route path="/auswahl/:id" element={<AuswahlID pokemon={pokemon}/>} />
          <Route path="/auswahl/:id/:info" element={<Detail pokemon={pokemon}/>} />
          <Route path="highscore" element={<Highscore pokemon={pokemon} />} /> 
      </Routes>
   </div>) : ("Loading...")}
   </>
  );
}

export default App;