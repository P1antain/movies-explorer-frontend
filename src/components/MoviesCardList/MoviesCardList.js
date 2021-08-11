import React from "react";
import './MoviesCardList.css'
import MoviesCard from "../MoviesCard/MoviesCard";
import testCard from '../../utils/utils'


function MoviesCardList(){
    const [ inFilm, setFilm ] = React.useState([])
    function addElement(){
        setFilm([...inFilm, ...testCard])
    }

    return(
        <ul className="moviesCardList">
            <button className="helpButton"
            onClick={addElement}
            >
                TEST
            </button>

            {inFilm.map((card) => {
                    return(
                        <MoviesCard
                        card={card}
                        key={card.id}
                        />
                    )
                })
            }

        </ul>
    )
}

export default MoviesCardList
