import React, { Component } from 'react';
import './App.css';
import StarWarsCharacterList from './components/StarWarsCharacterList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      starwarsSpecies: [],
      starwarsHomeWorld: [],
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
    this.getHomeWorld('https://swapi.co/api/planets/');
    this.getSpecies('https://swapi.co/api/species/');
  }

  getCharacters = URL => {
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  getHomeWorld = URL => {
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsHomeWorld: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  getSpecies = URL => {
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsSpecies: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };
  

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
       <StarWarsCharacterList starwarsChars={this.state.starwarsChars} />
      </div>
    );
  }
}

export default App;
