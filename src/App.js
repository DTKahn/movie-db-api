import React, { Component } from 'react';
import './App.css';
import axios from 'axios';


class App extends Component {
  constructor() {
    super();
    this.state = {
      movies : []
    }
  }

  // https://api.themoviedb.org/3/movie/popular?api_key=972b4433f3e8f302aee3055dd209330c
  
  componentDidMount() {
    axios({
      url: 'https://api.themoviedb.org/3/movie/now_playing',
      method: 'GET',
      params: {
        api_key: '972b4433f3e8f302aee3055dd209330c'
      }
    })

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Movies!</h1>
        </header>
      </div>
    );
  }
}

export default App;
