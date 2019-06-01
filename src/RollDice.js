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
            dice2 : 'one',
            rolling: false
        }
    }
    rollDice = () => {
        const handleDice1 = this.props.sides[Math.floor(Math.random()*this.props.sides.length)];
        const handleDice2 = this.props.sides[Math.floor(Math.random()*this.props.sides.length)];
        this.setState({dice1: handleDice1, dice2: handleDice2, rolling:true})


        setTimeout(() => {
            this.setState({rolling:false})
        }, 1000)
        
    }
    render() {
        return  (
            <div className="RollDice">
                <div className="RollDice-container">
                    <Dice face = {this.state.dice1} rolling={this.state.rolling}/>
                    <Dice face = {this.state.dice2} rolling={this.state.rolling}/>
                </div>
                <button onClick = {this.rollDice} disabled={this.state.rolling}>{this.state.rolling ? 'Rolling...' : 'Roll Dice!'}</button>
            </div>
        )
    }
}

export default RollDice;