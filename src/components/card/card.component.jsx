import React from "react";
import "../card/card.styles.css";

export const Card = props => (
    <div className= 'card-container'>
        <img src={`https://robohash.org/${props.monster.id}/set=set2&size=180x180`} alt="monsters"/>
    <h2>{props.monster.name}</h2>
    <p>{props.monster.username}</p>
    <p>{props.monster.email}</p>
    <p>{props.monster.address.city}</p>
    </div>
)