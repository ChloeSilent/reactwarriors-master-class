import React, {Component} from "react";
import {API_URL, API_KEY_3} from "../utils/api"
import MovieItem from './MovieItem';
import MovieTabs from "./MovieTabs"


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            moviesWillWatch: [],
            sort_by: "popularity.desc"
        }
    }

    componentDidMount() {

        this.getMovies();
    }



    componentDidUpdate(prevProps, prevState, snapshot) {

        if (prevState.sort_by !== this.state.sort_by) {

            this.getMovies();
        }
    }

    getMovies = () => {
        fetch(`${API_URL}/discover/movie?api_key=${API_KEY_3}&sort_by=${this.state.sort_by}`).then((response) => {

            return response.json()
        }).then((data) => {

            this.setState({
                movies: data.results
            })
        });
    }


    removeMovieById = (id) => {
        const updatedMovies = this.state.movies.filter(movie => movie.id !== id)

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

    };

    removeMovieFromToWatch = id => {

        const updatedMoviesWillWatch = this.state.moviesWillWatch.filter(movie => movie.id !== id)

        this.setState({
            moviesWillWatch: updatedMoviesWillWatch
        });

    };

    updateSortBy = value => {

        this.setState(
            {sort_by: value}
        );

    };

    render() {


        return (

            <div className='container '>
                <div className='row mt-4'>
                    <div className='col-9'>
                        <div className="row mb-4">
                            <div className="col-12">
                                <MovieTabs sort_by={this.state.sort_by}
                                           updateSortBy={this.updateSortBy}/>
                            </div>
                        </div>
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
                            {this.state.moviesWillWatch.map(movie => {
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
            </div>
        )
    }
}

export default App;
