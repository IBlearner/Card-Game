import React, { Component } from 'react';
import { Grid, Image } from 'semantic-ui-react'

class Board extends Component {
    state = {  }

    Grid = cols => {
        //making an array for the number of columns to be able to be mapped
        const cArray = []
        for (let i = 0; i < cols; i++) {
            cArray.push(i)
        }

        return cArray.map(single => {
            return (
                this.Tile(single)
            )
        })
    }

    Tile = (x) => {
        return (
            <Grid.Column>
                {x}
            </Grid.Column>
        )
    }

    render() {
        return (
            <Grid celled columns="equal">
                <Grid.Row>
                    {this.Grid(6)}
                </Grid.Row>
            </Grid>
        );
    }
}
 
export default Board;