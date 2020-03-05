import React, { Component } from 'react';
// import './style.css';

class NavMessage extends Component {
    state = {
        message: "",
        animating: false
    };

    componentDidUpdate({ score, topScore }, prevState) {
        const newState = { animating: true };

        if (score === 0 && topScore === 0) {
            newState.message = '';
        } else if (score === 0 && topScore > 0) {
            newState.message = 'incorrect';
        } else {
            newState.message = 'correct';
        }

        if (score !== this.props.score || this.state.message !== newState.message) {
            this.setState(newState);
        }
    }

    renderMessage = () => {
        switch (this.state.message) {
            case 'correct':
                return 'Correct!';
            case 'incorrect':
                return "Wrong, try again!";
            default:
                return 'Click on one of the Simpsons images to begin!';
        }
    };

    render() {
        return (
            <li
                className={this.state.animating ? this.state.message : ''}
                onAnimationEnd={() => this.setState({ animating: false })}
            >
                {this.renderMessage()}
            </li>
        );
    }
}

export default NavMessage;
