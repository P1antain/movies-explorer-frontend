import React from "react";
import './MoviesCard.css'
import { Route } from "react-router-dom";

function MoviesCard({card}){
    const [like, setLike] = React.useState(false)
    const handleClick = () =>{
        setLike(!like)
    }
    // const isLiked = card.likes.some(i => i._id === currentUser._id);
    const cardLike = `moviesCard__like ${like ? 'moviesCard__time_active': ''}`;
    return(
        <li className="moviesCard" >
            <div className="moviesCard__about">
                <h2 className="moviesCard__name">{card.name}</h2>
                <p className="moviesCard__time">{card.time}</p>
                <Route path="/movies">
                <button type="button"
                        className={cardLike}
                        onClick={handleClick}
                />
                </Route>
                <Route path="/saved-movies">
                    <button type="button"
                            className='moviesCard__del'
                    />
                </Route>
            </div>
            <img src={card.link} alt="" className="moviesCard__photo"/>
        </li>
    )
}

export default MoviesCard;
