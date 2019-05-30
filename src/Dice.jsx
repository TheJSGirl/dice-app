import React, {Component} from 'react';

class Dice extends Component {
    render () {
        return <i className={`fas fa-dice-${this.props.face}`}></i>
    }
}

export default Dice;