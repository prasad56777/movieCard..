import React, { Component } from 'react';
import axios from 'axios';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    axios
      .get('https://www.omdbapi.com/?apikey=45f0782a&s=war')
      .then((response) => {
        this.setState({ movies: response.data.Search || [] });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <div className="movie-list">
        {this.state.movies.map((movie) => (
          <div className="movie-card" key={movie.imdbID}>
            <img src={movie.Poster} alt={movie.Title} />
            <div className="movie-title">{movie.Title}</div>
          </div>
        ))}
      </div>
    );
  }
}

export default MovieList;
