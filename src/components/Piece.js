import React, { Component } from 'react';
import { Card } from 'semantic-ui-react'

class Piece extends Component {
    state = {

    }

    componentDidMount() {
        console.log(this.props.cardData)
    }

    CardInfo = () => {
        console.log(this.props.cardData)
        if (typeof this.props.cardData !== "undefined") {
            return (
                <Card>
                    <Card.Content>
                    <Card.Header>{this.props.cardData.name}</Card.Header>
                    <Card.Meta>
                        <span className='date'>Joined in 2015</span>
                    </Card.Meta>
                    <Card.Description>
                        Matthew is a musician living in Nashville.
                    </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
            
                    </Card.Content>
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