import React from 'react';
import './card.css';
import { Card } from '../card/card.component';

export const CardList = props => {
return(
    <React.Fragment>
    <div className="card-list">
        {props.monsters.map(monster => 
        <Card key={monster.id} monster={monster}/>
        )}
    </div>
    </React.Fragment>
    );
}