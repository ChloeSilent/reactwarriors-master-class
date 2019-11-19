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
        const updateMoviesWillWatch = [...this.state.moviesWillWatch]
        updateMoviesWillWatch.push(movie);
        this.setState(
            {
                moviesWillWatch: updateMoviesWillWatch
            });
        //console.log(updateMoviesWillWatch);
    }

    removeMovieFromToWatch = id => {
        const updatedMoviesWillWatch = this.state.moviesWillWatch.filter(movie => movie.id !== id)
        //console.log(updatedMovies);
        this.setState({
            moviesWillWatch: updatedMoviesWillWatch
        });

    }

    render() {
        // console.log("render");

        return <div className='container '>
            <div className='row'>
                <div className='col-9'>
                    <div className='row'>
                        {this.state.movies.map((movie) => {
                            return <div key={movie.id} className='col-6'>
                                <MovieItem item={movie}
                                           removeMovieById={this.removeMovieById}
                                           addMovieToWatch={this.addMovieToWatch}
                                           removeMovieFromToWatch={this.removeMovieFromToWatch}/>
                            </div>;
                        })}
                    </div>
                </div>
                <div className="col-3">
                    <p>Movies will watch: {this.state.moviesWillWatch.length}</p>
                    <ul className="list-group">
                        {this.state.moviesWillWatch.map(movie=>{
                            return (
                                <li key={movie.id} className="list-group-item">
                                    <div className="d-flex justify-content-between">
                                        <p>{movie.title}</p>
                                        <p>{movie.vote_average}</p>
                                    </div>
                                </li>
                            )
                        })}

                    </ul>
                </div>
            </div>
        </div>;
    }
}

export default App;
