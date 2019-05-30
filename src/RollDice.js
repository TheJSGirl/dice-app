import React, {Component} from 'react';
import Dice from './Dice';
import './RollDice.css';

class RollDice extends Component {
    static defaultProps = {
        sides : ['one', 'two', 'three', 'four', 'five']
    }
    constructor(props){
        super(props);
        this.state = {
            dice1 : 'one',
            dice2 : 'one'
        }
    }
    rollDice = () => {
        const handleDice1 = this.props.sides[Math.floor(Math.random()*this.props.sides.length)];
        const handleDice2 = this.props.sides[Math.floor(Math.random()*this.props.sides.length)];
        this.setState({dice1: handleDice1, dice2: handleDice2})
        
    }
    render() {
        return  (
            <div className="RollDice">
                <div className="RollDice-container">
                    <Dice face = {this.state.dice1}/>
                    <Dice face = {this.state.dice2}/>
                </div>
                <button onClick = {this.rollDice}>Roll Dice!</button>
            </div>
        )
    }
}

export default RollDice;