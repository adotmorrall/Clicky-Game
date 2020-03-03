import React, { Component } from 'react';
import Navbar from "./components/Navbar/Navbar";
import Character from "./components/Game/Game";
import Container from "./components/Container/Container";
import images from "./images.json";
import './App.css';

class App extends Component {

  state = {
    images,
    score: 0,
    topscore: 0
  };

  gameOver = () => {
    if (this.state.score > this.state.topscore) {
      this.setState({ topscore: this.state.score }, function () {
        console.log(this.state.topscore);
      });
    }
    this.state.images.forEach(character => {
      character.count = 0;
    });
    alert(`Game over \nYour Score: ${this.state.score}`);
    this.setState({ score: 0 });
    return true;
  };

  clickCount = id => {
    this.state.images.find((char, i) => {
      if (char.id === id) {
        if (images[i].count === 0) {
          images[i].count = images[i].count + 1;
          this.setState({ score: this.state.score + 1 }, function () {
            console.log(this.state.score);
          });
          this.state.images.sort(() => Math.random() - 0.5);
          return true;
        } else {
          this.gameOver();
        }
      }
    });
  };

  render() {
    return (
      <Container>
        <Navbar score={this.state.score} topscore={this.state.topscore}>
          The Simpsons!
        </Navbar>
        {this.state.images.map(character => (
          <Character
            clickCount={this.clickCount}
            id={character.id}
            key={character.id}
            image={character.image}
          />
        ))}
      </Container>
    );
  }


}


export default App;
