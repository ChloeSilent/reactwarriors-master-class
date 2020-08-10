import React, {Component} from "react";
import {moviesData} from "../moviesData"
import MovieItem from './MovieItem'


class App extends Component {

    constructor() {
        super();
        this.state = {
            movies: moviesData,
          moviesWillWatch: []
        }
    }

    removeMovieById = (id) => {
        const updatedMovies = this.state.movies.filter(movie => movie.id !== id)
        //console.log(updatedMovies);
        this.setState({
            movies: updatedMovies
        });

    };

    addMovieToWatch = (movie) => {
      // const newMoviesList = this.state.moviesWillWatch;
      // newMoviesList.push(this.state.movies.filter(movie => movie.id === id));
      // console.log(newMoviesList);
      // this.setState(
      //     {
      //       moviesWillWatch: newMoviesList
      //     });
      const updateMoviesWillWatch = [...this.state.moviesWillWatch]
      updateMoviesWillWatch.push(movie);
      this.setState(
          {
            moviesWillWatch: updateMoviesWillWatch
          });
      console.log(updateMoviesWillWatch);
    };

    render() {
        console.log("render");

        return <div className='container '>
            <div className='row'>
                <div className='col-9'>
                    <div className='row'>
                        {this.state.movies.map((movie) => {
                            return <div key={movie.id} className='col-6'>
                              <MovieItem  item={movie} removeMovieById={this.removeMovieById} addMovieToWatch={this.addMovieToWatch}/>
                            </div>;
                        })}
                    </div>
                </div>
              <div className="col-3">
                <p>Movies will watch: {this.state.moviesWillWatch.length}</p>
              </div>
            </div>
        </div>;
    }
}

export default App;
