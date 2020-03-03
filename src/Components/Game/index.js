import React, { Component } from 'react';
import Nav from '../Navbar';
import Header from '../Header';
import Container from '../Container';
import ClickItem from '../ClickItem';
import Footer from '../Footer';
import data from '../../images.json';

class Game extends Component {
    state = {
        data,
        score: 0,
        topScore: 0
    };

    componentDidMount() {
        this.setState({ data: this.shuffleData(this.state.data) });
    }

    handleRightGuess = newData => {
        const { topScore, score } = this.state;
        const newScore = score + 1;
        const newTopScore = Math.max(newScore, topScore);

        this.setState({
            data: this.shuffleData(newData),
            score: newScore,
            topScore: newTopScore
        });
    };

    handleWrongGuess = data => {
        this.setState({
            data: this.resetData(data),
            score: 0
        });
    };

    resetData = data => {
        let i = data.length - 1;
        while (i > 0) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = data[i];
            data[i] = data[j];
            data[j] = temp;
            i--;
        }
        return data;
    };

    handleItemClick = id => {
        let correctGuess = false;
        const newData = this.state.data.map(item => {
            const newItem = { ...item };
            if (newItem.id === id) {
                if (!newItem.clicked) {
                    newItem.clicked = true;
                    correctGuess = true;
                }
            }
            return newItem;
        });
        correctGuess
            ? this.handleRightGuess(newData)
            : this.handleWrongGuess(newData);
    };

    render() {
        return (
            <div>
                <Nav score={this.state.score} topScore={this.state.topScore} />
                <Header />
                <Container>
                    {this.state.data.map(item => {
                        <ClickItem
                            key={item.id}
                            id={item.id}
                            shake={!this.state.score && this.state.topScore}
                            handleClick={this.handleItemClick}
                            image={item.image}
                        />
                    })}
                </Container>
                <Footer />
            </div>
        );
    }
}

export default Game;
