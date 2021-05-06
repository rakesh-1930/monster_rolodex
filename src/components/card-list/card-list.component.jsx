import React from "react";
import "./card-list.styles.css";
import {Card} from "../card/card.component";


export const CardList = props => (
     <div className = 'cardList'>{props.monsters.map(monsters => (<Card key = {monsters.id} monster={monsters} /> ))}</div>
)