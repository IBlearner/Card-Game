import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react'

class Piece extends Component {
    state = {

    }

    CardInfo = () => {
        console.log(this.props.cardData)
        const { cardData } = this.props
        if (typeof cardData !== "undefined") {
            return (
                <Card>
                    <Card.Content>
                    <Card.Header>
                        {cardData.name}
                    </Card.Header>
                    <Card.Meta>
                        <span className='date'>Joined in 2015</span>
                    </Card.Meta>
                    <Card.Description>
                        {cardData.description}
                    </Card.Description>
                    </Card.Content>
                    <Button>
                        Play
                    </Button>
                </Card>
            )
        }
    }

    render() { 
        return (
            <>
                {this.CardInfo()}
            </>
        );
    }
}
 
export default Piece;