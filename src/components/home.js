import React from 'react'
import {Link} from "react-router-dom"; 

const home = () => {
    return (
        <div className='home'>
            <h1>Wähle dein Pokemon und bekämpfe alle anderen! Gibt eh zu viele.</h1>
            <Link to={`Hier ist dann ein link`} className="pupi" >FIGHT!</Link>
            
            <p className="highscorepos"><Link to={`Hier ist dann ein link zu den HS`} className="highscorelink" >Highscores</Link></p>
        </div>
    )
}

export default home