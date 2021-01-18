import React, { Component } from 'react';
import Piece from "./Piece"

class Hand extends Component {
    state = {  }

    mapCards = () => {
        const mappedHand = this.props.hand.map((single, key) => {
            return <Piece key={key} cardData={single}/>
        })
        return mappedHand
    }

    render() { 
        return (
            <>
                {this.mapCards()}
            </>
        );
    }
}
 
export default Hand;