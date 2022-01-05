import React from 'react'
import {Link} from "react-router-dom"; 

const home = () => {
    return (
        <div className='home'>
            <h1>Wähle dein Pokemon und bekämpfe alle anderen! Gibt eh zu viele.</h1>
            <Link to={"Auswahl"} className="pupi" >FIGHT!</Link>
            
            <p className="highscorepos"><Link to={"highscore"} className="highscorelink" >Highscores</Link></p>
        </div>
    )
}

export default home