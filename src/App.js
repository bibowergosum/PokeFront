import './index.css';
import {Routes, Route} from "react-router-dom";
import Home from './components/home.js';
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
      </Routes>
   </div>) : ("Loading...")}
   </>
  );
}

export default App;


//         <Route path="products" element={<Products autos={autos}/>} />
  //         <Route path="auto/:id" element={<Details autos={autos}/>} />
    //  <div>{pokemon[0].name.english}</div>