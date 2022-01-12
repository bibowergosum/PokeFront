import './index.css';
import {Routes, Route} from "react-router-dom";
import Home from './components/home.js';
import Auswahl from './components/auswahl.js';
import Highscore from './components/highscore';
import AuswahlID from './components/auswahlID';
import Detail from './components/detail';
import {useState, useEffect} from "react";
import axios from 'axios';

function App(props) {
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    axios.get ("https://pokedex1234.herokuapp.com/pokemon")
      .then((res) => setPokemon(res.data))
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